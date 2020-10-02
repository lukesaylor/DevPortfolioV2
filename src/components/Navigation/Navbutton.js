import React from "react";
import "./Navbutton.css";

const Navbutton = (props) => (
  <div className="Navbutton">
    <img className="buttonimg" src={props.image} alt={props.alt} />
    <div className="buttontext">{props.title}</div>
  </div>
);

export default Navbutton;
