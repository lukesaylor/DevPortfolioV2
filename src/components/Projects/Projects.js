import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="Projectscontainer">
      <h1 className="Projectsheader">Projects</h1>
      <div className="ProjectsContent">
        <ProjectCard
          title="Web Code Sandbox"
          image="codepenclone"
          text="In browser HTML/CSS/JS code sandbox with local storage for code memory"
          codelink="https://github.com/lukesaylor/codepenclone"
          livelink="https://lukesaylor.github.io/codepenclone/"
        />
        <ProjectCard
          title="Typescript React Quiz App"
          image="quizapp"
          text="Quiz application built with Typescript React. Trivia questions provided by opentdb."
          codelink="https://github.com/lukesaylor/reactquiz"
          livelink="https://lukesaylor.github.io/reactquiz/"
        />
        <ProjectCard
          title="WhatsApp Clone"
          image="whatsapp"
          text="Likeness of the Whatsapp web messaging app built in React. Utilizes a Firebase realtime database for message storage. Google Sign-in for authentication and user data. Hosted on Firebase."
          codelink="https://github.com/lukesaylor/whatsappclone"
          livelink="https://wutsappclone.web.app/"
        />
        <ProjectCard
          title="COVID-19 Tracking App"
          image="covidapp"
          text="Coronavirus data resource built with React. Data is provided by Covid Data API and displayed with ChartJS. UI elements created with Material UI."
          codelink="https://github.com/lukesaylor/covidtracker"
          livelink="https://lukesaylor.github.io/covidtracker/#/"
        />
        <ProjectCard
          title="Web Chat Application"
          image="chatapp"
          text="Realtime React chat application utilizing socket.io for websocket connections in user creatable chatrooms."
          codelink="https://github.com/lukesaylor/covidtracker"
          livelink="https://lukesaylor.github.io/covidtracker/#/"
        />
        <ProjectCard
          title="Musician Page"
          image="TheBills"
          text="Band page built in React with custom graphical elements designed in procreate."
          codelink="https://github.com/lukesaylor/billsbandpage"
          livelink="https://lukesaylor.github.io/billsbandpage/#/"
        />
        <ProjectCard
          title="Facial Recognition App"
          image="FacialApp"
          text="This is a React App that identifies faces within images using the image URL and Clarafai facial recognition API."
          codelink="https://github.com/lukesaylor/facialrecogapp"
          livelink="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
