import React, { useEffect, useState } from "react";
import "./SkillsIconContainer.css";

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handle = (e) => {
      setMousePosition({
        x: 100 * (e.pageX / window.innerWidth),
        y: 100 * (e.pageY / window.innerHeight),
      });
    };

    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });
  return mousePosition;
};

const SkillsIconContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { x, y } = useMouse();

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
          style={{
            top: `${y > 50 ? y - 33 : y + 1}vh`,
            left: `${x > 50 ? x - 28 : x + 1}vw`,
          }}
          className="popup"
        >
          <h3>{props.title}</h3>
          <p>{props.skillModalText}</p>
        </div>
      ) : null}
      {isOpen ? <div className="BackdropLogo">{props.children}</div> : null}
    </div>
  );
};
export default SkillsIconContainer;
