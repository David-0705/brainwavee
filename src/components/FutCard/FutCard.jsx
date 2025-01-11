import React, { useState, useEffect } from "react";
import image1 from "../../assets/card/1.webp";
import Logo from "../../assets/card/cardLogo.webp";
import "./futcard.css";
import { departments } from "../../constants";
import '../Card/card.css';

const FutPlayercard = ({ deptName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [captainName, setCaptainName] = useState("");
  const [DepartmentName, setDepartmentName] = useState("");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");

  const getDept = () => {
    const currDept = departments.find(checkdept);
    if (currDept) {
      setCaptainName(currDept.captain);
      setDepartmentName(currDept.department);
      setColor1(currDept.color1 || "#000000");  // Default to black if color1 is not available
      setColor2(currDept.color2 || "#000000");  // Default to black if color2 is not available
    } else {
      setCaptainName("Not Found");
      setDepartmentName("Not Found");
    }
  };

  function checkdept(data) {
    if (data) {
      let temp = data.department;
      data.department = data.department.replace(/\./g, ""); // Replace all periods with empty string
      if (data.department === deptName) {
        data.department = temp;
        return data;
      }
    }
  }

  useEffect(() => {
    // Fetch department details on component mount
    getDept();

    const handleScroll = () => {
      setIsHovered(false); // Reset hover effect on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="flex justify-center items-center pb-20 -mt-10">
      <div className="deptcard bg-n-8">
        <div
          className="spinn spinn-blur"
          style={{
            animation: "speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite",
            background: `linear-gradient(-45deg, ${color1}, #0000 46% 54%, ${color2})`
          }}
        ></div>
        <div
          className="spinn spinn-intense"
          style={{
            animation: "speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite",
            background: `linear-gradient(-45deg, ${color1}, #0000 35% 65%, ${color2})`
          }}
        ></div>
        <button className="mail" onClick={handleClick}>
          <div>
            <img className="w-[40px] h-[60px]" src={Logo} />
          </div>
        </button>
        <div style={{ border: `1px solid ${color1}` }} className={`profile-pic ${isHovered ? "hover-effect" : ""} spin`}>
          <p className="text-white relative top-1/3 font-bold text-[37px] tracking-[0.1em] fon text-center px-2">
            {DepartmentName}
          </p>
          <img src={image1} alt="Player" />
        </div>
        <div style={{background:color1}} className="bottom">
          <div className="content">
            <span style={{color:"#000"}} className="name">
              <p className="h6">{captainName}</p>
            </span>
            <span style={{color:"#000"}} className="about-me">
              <p className="h3">{DepartmentName}</p>
            </span>
          </div>
          <div style={{color:"#000"}} className="bottom-bottom">
            <div className="social-links-container f">
              <p className="text-xl font-bold">Department Captain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutPlayercard;
