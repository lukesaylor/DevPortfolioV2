import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="Projectscontainer">
      <h1 className="Projectsheader">Projects</h1>
      <div className="ProjectsContent">
        <ProjectCard 
          title="Band Page"
          image="TheBills"
          text="Band page built in React with custom graphical elements designed in procreate"
          codelink="https://github.com/lukesaylor/billsbandpage"
          livelink="https://lukesaylor.github.io/billsbandpage/#/"
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
        <ProjectCard 
          title="WhatsApp clone"
          image="whatsapp"
          text="Likeness of the Whatsapp web messaging app built in React. Utilizes a Firebase realtime database for message storage. Google Sign-in for authentication and user data. Hosted on Firebase"
          codelink="https://github.com/lukesaylor/whatsappclone"
          livelink="https://wutsappclone.web.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
