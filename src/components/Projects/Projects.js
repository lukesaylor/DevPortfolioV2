import React from 'react';
import './Projects.css';
import Carousel  from 'react-bootstrap/Carousel';
import FacialApp from '../../Assets/ProjectImages/FacialApp.png';
import PigDice from '../../Assets/ProjectImages/PigDice.png';
import RoboPals from '../../Assets/ProjectImages/RoboPals.png';
import TheBills from '../../Assets/ProjectImages/TheBills.png';


const Projects = () => (
    <div className="Projectscontainer">
        <h1 className="Projectsheader">Projects</h1>
        <div className="ProjectsContent">
            <Carousel className="h-100">
                <Carousel.Item>
                    <img
                    className="d-block mx-auto w-70 rounded pt-4"
                    src={FacialApp}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Facial Recognition App</h3>
                    <p>Web image facial recognition app built in React</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block mx-auto w-70 rounded pt-4"
                    src={PigDice}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Pig Dice Game</h3>
                    <p>Pig Dice Game built in HTML/JS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block mx-auto w-70 rounded pt-4"
                    src= {RoboPals}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>RoboPals</h3>
                    <p>API generated robot user directory built in React</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block mx-auto w-70 rounded pt-4"
                    src= {TheBills}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>The Bills Band Page</h3>
                    <p>Band page built in React</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
)

export default Projects;