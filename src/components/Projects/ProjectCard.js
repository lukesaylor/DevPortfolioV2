import React from "react";
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="CardContainer">
      <div className="CardImage">
      <img
        
        src={require(`../../Assets/ProjectImages/${props.image}.png`)}
        alt="project"
      />
      </div>
      <div className="CardInner">
      <h4 className="CardTitle">{props.title}</h4>
      <p className="CardText">{props.text}</p>
      <div className="CardButtons">
        <a href={props.codelink} rel="noopener noreferrer" target="_blank">
          <button >CODE</button>
        </a>
        <a href={props.livelink} rel="noopener noreferrer" target="_blank">
          <button >LIVE</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
