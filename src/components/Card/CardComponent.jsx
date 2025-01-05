import React from "react";
import './card.css'

// React component
const CardComponent = ({department,image}) => {
  return (
    <div className="card-container">
      <div className="spin spin-blur"></div>
      <div className="spin spin-intense"></div>
      <div className="backdrop"></div>
      <div className="card-border">
        <div className="spin spin-inside"></div>
      </div>
      <div className="card">
        <div className="body">
         <h1>{department}</h1>
         <img src={image} alt={department} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
