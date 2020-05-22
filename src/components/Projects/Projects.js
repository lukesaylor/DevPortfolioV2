import React from 'react';
import './Projects.css';
import Carousel  from 'react-bootstrap/Carousel';
import Headshot from '../../Assets/Headshot.png';


const Projects = () => (
    <div className="Projectscontainer">
        <h1 className="Projectsheader">Projects</h1>
        <div className="ProjectsContent Container">
        <Carousel style={{'top':"0",'height':"100%"}}>
            <Carousel.Item style={{'height':"70vh"}}>
                <img style={{'height':"60vh"}}
                className="d-block w-100"
                src={Headshot}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"70vh"}}>
                <img
                className="d-block w-100"
                src={Headshot}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"70vh"}}>
                <img
                className="d-block w-100"
                src={Headshot}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    </div>
)

export default Projects;