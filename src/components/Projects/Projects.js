import React from "react";
import "./Projects.css";
import Carousel from "react-bootstrap/Carousel";
import FacialApp from "../../Assets/ProjectImages/FacialApp.png";
import PigDice from "../../Assets/ProjectImages/PigDice.png";
import RoboPals from "../../Assets/ProjectImages/RoboPals.png";
import TheBills from "../../Assets/ProjectImages/TheBills.png";
import LiveIcon from "../../Assets/LiveIcon.png";
import { ReactComponent as Githublogo } from "../../Assets/github.svg";
import covidapp from "../../Assets/ProjectImages/covidapp.png";
import chatapp from "../../Assets/ProjectImages/chatapp.png";

const Projects = () => (
  <div className="Projectscontainer">
    <h1 className="Projectsheader">Projects</h1>
    <div className="ProjectsContent">
      <Carousel className="h-100">
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto mt-5 rounded"
            src={FacialApp}
            alt="First slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>Facial Recognition App</h3>
            <p>Web image facial recognition app built in React</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto rounded mt-5"
            src={PigDice}
            alt="Second slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>Pig Dice Game</h3>
            <p>Pig Dice Game built in HTML/JS</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto rounded mt-5"
            src={RoboPals}
            alt="Third slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>RoboPals</h3>
            <p>API generated robot user directory built in React</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto rounded mt-5"
            src={TheBills}
            alt="Fourth slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>The Bills Band Page</h3>
            <p>Band page built in React</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto rounded mt-5"
            src={covidapp}
            alt="Fifth Slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>Covid-19 data app</h3>
            <p>Built with React and ChartJS</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block mx-auto rounded mt-5"
            src={chatapp}
            alt="Fifth Slide"
          />
          <Carousel.Caption className="CarouselText">
            <h3>Realtime Chat App</h3>
            <p>Built with React, Socket.io, Node, and Express</p>
            <div>
              <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="ProjectGitIcon" />
              </a>
              <a target="blank" href="https://github.com/lukesaylor">
                <img src={LiveIcon} alt="live" className="LiveIcon" />
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Projects;