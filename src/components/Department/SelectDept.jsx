import React, { useState } from "react";
import PixelCanvas from "./Pixel";
import Section from "../Section";
import { departments } from "../../constants";

const SelectDept = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the index of the hovered department

  return (
    <Section
      className="pt-14 pb-20"
      crosses
      crossesOffset="lg:translate-y-[0rem]"
      customPaddings
    >
      <div className="relative pl-64 pr-[1.5625rem] xl:pl-[35px] xl:pr-[35px]">
        <div className="pl-[20px] pr-[20px] gap-5 grid grid-cols-4 pb-7">
          {departments.map((department, index) => (
            <div
              className="border-2 rounded-2xl relative flex items-center justify-center" // Use flexbox to center content
              key={index}
              style={{
                borderColor: hoveredIndex === index ? department.color1: "",
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
            >
              <PixelCanvas
                colors={["#f8fafc", "#f1f5f9", "#cbd5e1"]}
                hoverColors={[department.color1,department.color2]} // Wrap department.color in an array
                gap={10}
                speed={25}
                noFocus={false}
                url={department.url}
                department={department.department}
              />

           
                <p style={{color: hoveredIndex === index ? department.color1 : "",}} className="absolute">{department.department}</p>
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SelectDept;
