import React from "react";
import './card.css';

// React component
const CardComponent = ({ department, image }) => {
  return (
    <div className="card-container">
      <div className="spin spin-blur"></div>
      <div className="spin spin-intense"></div>
      <div className="backdrop"></div>
      <div className="card-border">
        <div className="spin spin-inside"></div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-font h1 ">{department}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
