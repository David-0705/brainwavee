import React, { useEffect, useRef, useState } from "react";
import "./pixel.css";

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;

    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }

    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }

    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

const PixelCanvas = ({
  colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
  hoverColors = ["#e0f2fe", "#2d3", "#0ee9"],
  gap = 5,
  speed = 35,
  noFocus = false,
  width = 500,
  height = 500,
  text,
  url,
  department,
}) => {
  const canvasRef = useRef(null);
  const [pixels, setPixels] = useState([]);
  const [animation, setAnimation] = useState(null);
  const [activeColors, setActiveColors] = useState(colors);
  const [reducedMotion, setReducedMotion] = useState(false);

  const throttleSpeed = 0.001;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resizeObserver = new ResizeObserver(() => initCanvas(canvas, ctx));

    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    resizeObserver.observe(canvas.parentNode);

    initCanvas(canvas, ctx);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animation);
    };
  }, [gap, speed, activeColors]);

  const initCanvas = (canvas, ctx) => {
    const rect = canvas.parentNode.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    canvas.width = width;
    canvas.height = height;

    const newPixels = createPixels(canvas, ctx, width, height);
    setPixels(newPixels);

    handleAnimation("appear", ctx, newPixels);
  };

  const createPixels = (canvas, ctx, width, height) => {
    const newPixels = [];
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = activeColors[Math.floor(Math.random() * activeColors.length)];
        const delay = reducedMotion ? 0 : getDistanceToCanvasCenter(canvas, x, y);
        newPixels.push(new Pixel(canvas, ctx, x, y, color, speed * throttleSpeed, delay));
      }
    }
    return newPixels;
  };

  const getDistanceToCanvasCenter = (canvas, x, y) => {
    const dx = x - canvas.width / 2;
    const dy = y - canvas.height / 2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleAnimation = (fnName, ctx, pixels) => {
    cancelAnimationFrame(animation);
    const animate = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      for (let i = 0; i < pixels.length; i++) {
        pixels[i][fnName]();
      }

      if (!pixels.every((pixel) => pixel.isIdle)) {
        setAnimation(requestAnimationFrame(animate));
      }
    };
    animate();
  };

  const onMouseEnter = () => {
    setActiveColors(hoverColors);
    handleAnimation("appear", canvasRef.current.getContext("2d"), pixels);
  };

  const onMouseLeave = () => {
    setActiveColors(colors);
    handleAnimation("disappear", canvasRef.current.getContext("2d"), pixels);
  };

  const onClick = () => {
    setActiveColors(hoverColors);
    handleAnimation("appear", canvasRef.current.getContext("2d"), pixels);
  };

  return (
    <div
      onMouseEnter={!noFocus ? onMouseEnter : null}
      onMouseLeave={!noFocus ? onMouseLeave : null}
      onClick={!noFocus ? onClick : null}
      style={{ display: "grid", width: "100%", height: "100%", overflow: "hidden",  }}
    >  
    <a
                href={`${url}?department=${department}`} 
              > 
    
      <canvas ref={canvasRef}></canvas>
      
    </a>
    </div>
  );
};

export default PixelCanvas;
