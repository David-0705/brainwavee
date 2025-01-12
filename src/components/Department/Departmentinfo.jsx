import React from "react";
import { useLocation } from "react-router-dom";
// import { winners } from '../../constants';  // Import winners array from constants
import GlowingText from "../design/Glowingtext";
import Section from "../Section";
import GridLayout from "../SportImg/ImgGrid";
import FutPlayerCard from "../FutCard/FutCard";
import { GradientLight } from "../design/Benefits";
import { Diamonds } from "../design/Hero";
import { Gradient } from "../design/Services";

const Deptinfo = ({ departmentName }) => {
  if (departmentName) {
    departmentName = departmentName.replace(/\./g, ""); // Replace all periods with empty string
  }

  // // Access the department data from the winners array
  // const departmentData = winners[0].department[departmentName]; // Accessing the department from the department object
  // console.log(winners)
  // if (!departmentData) {
  //   return <p>{departmentName}: Department not found!</p>;
  // }

  return (
    <div>
      <Section
        className="pt-[10rem] -mt-[5.25rem] pb-[10rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="flex justify-center">
          <GlowingText text={`${departmentName.toUpperCase()} Department`} />
        </div>
  
          {/* Other elements, with higher z-index to appear on top */}
          <div className="relative botton-0 ">
            <GradientLight />
          </div>
          <div className="relative top-0 ">
            <Gradient />
          </div>

        <FutPlayerCard deptName={departmentName.toUpperCase()} />
        <GridLayout />
      </Section>
    </div>
  );
};

export default Deptinfo;
