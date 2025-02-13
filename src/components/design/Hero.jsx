import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "../../assets/svg/PlusSvg";
import '../css/hero.css';

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

 export const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const Diamonds = ({ w, h }) => {
  return (
    <div style={{ width: `${w}`, height: `${h}` }} className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] bg-transparent border border-n-2/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] bg-transparent border border-n-2/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] bg-transparent border border-n-2/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[25%] h-[25%] bg-transparent border border-n-2/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};



export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);
  

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute lg:mt-96 -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={` shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={` shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={` shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#fff] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={` shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[0deg]">
          <div
            className={`shadow-[0px_0px_45px_5px_rgba(255,255,255)] blink_me w-6 h-6 mt-20 bg-gradient-to-b from-[#DD734F] to-[#fff] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
