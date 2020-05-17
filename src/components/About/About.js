import React from 'react';
import './About.css';
import Aboutimage from '../../Assets/Headshot.png'


const About = () => (
    <div className="Aboutcontainer">
    <h1 className="Aboutheader">About.</h1>
    <div className="AboutContent">
        <img className="Aboutimage" src={Aboutimage} alt="lukas saylor"></img>
    </div>

    </div>
)

export default About;