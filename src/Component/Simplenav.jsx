import React from "react";
import { NavLink } from "react-router-dom";

const SimpleNavbar = (props) => {
  return (
    <div style={{ textAlign: "left", paddingleft: "40px 0" }}>
      {/* Breakfast Rides title link */}
      <NavLink
        to="/breakfastrides"
        className={({ isActive }) =>
          `font-bold text-white ${isActive ? "text-yellow-500" : ""}`
        }
        style={{ textDecoration: "none", fontSize: "24px" }}
      >
        {props.name2}
      </NavLink>

      {/* Home link with a double arrow on the right */}
      <div style={{ marginTop: "10px" }}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-white ${isActive ? "text-Yellow-500" : ""}`
          }
          style={{
            textDecoration: "none",
            fontSize: "18px",
            marginRight: "10px",
          }}
        >
          Home
        </NavLink>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>&raquo;</span>

        <NavLink
          to="/breakfastrides"
          className={({ isActive }) =>
            `text-white ${isActive ? "text-Yellow-500" : ""}`
          }
          style={{
            textDecoration: "none",
            fontSize: "18px",
            marginRight: "10px",
          }}
        >
          {props.name}
        </NavLink>

        <span style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>&raquo;</span>
        
        <NavLink
          to="/Rishikesh"
          className={({ isActive }) =>
            `text-white ${isActive ? "text-Yellow-500" : ""}`
          }
          style={{
            color:"Yellow",
            textDecoration: "none",
            fontSize: "18px",
            marginRight: "3px",
          }}
        >
          {props.name2}
        </NavLink>
      </div>
    </div>
  );
};

export default SimpleNavbar;
