import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="Projectscontainer">
      <h1 className="Projectsheader">Projects</h1>
      <div className="ProjectsContent">
        <ProjectCard 
          title="Facial Recognition App"
          image="FacialApp"
          text="This is a React App that identifies faces within images using the image URL and Clarafai API
          This is a React App that identifies faces within images using the image URL and Clarafai API 
          This is a React App that identifies faces within images using the image URL and Clarafai API"
          codelink="https://github.com/lukesaylor/facialrecogapp"
          livelink="https://www.google.com"
        />
        <ProjectCard 
          title="Facial Recognition App"
          image="FacialApp"
          text="This is a React App that identifies faces within images using the image URL and Clarafai API
          This is a React App that identifies faces within images using the image URL and Clarafai API 
          This is a React App that identifies faces within images using the image URL and Clarafai API"
          codelink="https://github.com/lukesaylor/facialrecogapp"
          livelink="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
