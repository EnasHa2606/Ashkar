import React from "react";
import image from "./image.svg";
import "./style.css";
import vector from "./vector.svg";

export const DentalRestoration = () => {
  return (
    <div className="dental-restoration">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="home-return">
            <img className="vector" alt="Vector" src={vector} />

            <img className="img" alt="Vector" src={image} />
          </div>

          <div className="frame">
            <div className="text-wrapper">Menu</div>
          </div>

          <div className="div">Dental Restorations</div>
        </div>
      </div>
    </div>
  );
};
