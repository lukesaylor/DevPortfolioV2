import React from "react";
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="CardContainer">
      <img
        className="CardImage"
        src={require(`../../Assets/ProjectImages/${props.image}.png`)}
        alt="project"
      />
      <div className="CardInner">
      <p className="CardText">{props.text}</p>
        <a href={props.codelink} rel="noopener noreferrer" target="_blank">
          <button className="CodeLink">Code</button>
        </a>
        <a href={props.livelink} rel="noopener noreferrer" target="_blank">
          <button className="LiveLink">Live</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
