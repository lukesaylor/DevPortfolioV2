import React from "react";
import "./SkillsIconContainer.css";

const SkillsIconContainer = (props) => (
  <div className="SkillsIconContainer">
    <p>{props.title}</p>
    <div className="SkillIcon">{props.children}</div>
  </div>
);

export default SkillsIconContainer;
