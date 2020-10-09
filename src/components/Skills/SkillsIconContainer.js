import React, { useEffect, useState} from "react";
import "./SkillsIconContainer.css";

const SkillsIconContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="SkillsIconContainer">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
         
        className="SkillIcon"
      >
        {props.children}
      </div>

      {isOpen ? (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="popup"
        >
          <h3>{props.title}</h3>
          <p>{props.skillModalText}</p>
        </div>
      ) : null}
    </div>
  );
};
export default SkillsIconContainer;
