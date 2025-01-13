import React, { useState } from "react";
import PixelCanvas from "./Pixel";
import Section from "../Section";
import { departments } from "../../constants";
import Heading from "../Heading";
import GlowingText from "../design/Glowingtext";

const SelectDept = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section
      className="pt-0 pb-20 px-15"
      crosses
      crossesOffset="lg:translate-y-[0rem]"
      customPaddings
    >
      {/* Center the GlowingText horizontally */}
      <div className="flex relative top-10 justify-center mb-10">
        <GlowingText text="Departments" fs="48px" />
      </div>

      <div className="relative scroll-pt-96 px-4 lg:pl-64 lg:pr-[1.5625rem] xl:pl-[35px] xl:pr-[35px]">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-7">
          {departments.map((department, index) => (
            <div
              className="border-2 rounded-2xl relative flex items-center justify-center"
              key={index}
              style={{
                borderColor: hoveredIndex === index ? department.color1 : "",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <PixelCanvas
                colors={["#808080", "#5a5a5a", "#cbd5e1"]}
                hoverColors={[department.color1, department.color2]}
                gap={10}
                speed={25}
                noFocus={false}
                url={department.url}
                department={department.department.toLowerCase()}
              />
              <p
                style={{
                  color: hoveredIndex === index ? department.color1 : "",
                }}
                className="absolute text-sm md:text-base text-center"
              >
                {department.department}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SelectDept;
