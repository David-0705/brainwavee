import React from "react";
// Add styles if needed

const GlowingText = ({ 
  text = "Lumière Enchantée,", 
  subtitle = "", 
  filterId = "glow-4",
  fs="28px"
}) => {
  return (
    <div className="glowing-text-container">
      <h1 className="h1" style={{fontSize:fs}}>
        <span
          className="inline-block relative glow-filter"
          data-text={text}
        >
          {text}
        </span>{" "}
        {subtitle}
      </h1>

      {/* SVG Glow Filter */}
      <svg
        className="filters"
       
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur4"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="19"
              result="blur19"
            />
            <feColorMatrix
              in="blur4"
              result="color-0-blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.9803921568627451 0 0 0.9647058823529412
                      0.9647058823529412 0.9647058823529412 0.9647058823529412 0.9647058823529412 0
                      0 0 0 0.8 0"
            />
            <feMerge>
              <feMergeNode in="color-0-blur" />
              <feMergeNode in="blur19" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GlowingText;
