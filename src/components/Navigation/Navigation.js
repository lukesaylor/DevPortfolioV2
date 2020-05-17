import React from 'react';
import  './Navigation.css';
import lsicon from '../../Assets/LSicon.png';
import homeicon from '../../Assets/home.png';
import skillsicon from '../../Assets/skills.png';
import aboutmeicon from '../../Assets/aboutme.png';
import projectsicon from '../../Assets/projects.png';
import contacticon from '../../Assets/contact.png';
import {ReactComponent as Githublogo} from '../../Assets/github.svg';
import {ReactComponent as Leetcodelogo} from '../../Assets/leetcode.svg';
import {ReactComponent as Linkedinlogo} from '../../Assets/linkedin.svg';
import Navbutton from '../Navigation/Navbutton';
import {Link} from 'react-router-dom';



const Navigation = () => (
    <div className="Navigation">
         <img src={lsicon} alt="Logo" className="LSicon"/>
          
         <navbuttons className="Navbuttons">
            <Link to="/">
                <Navbutton image={homeicon} alt="Home" title="Home"/>
            </Link>
            <Link to="/About"> 
                <Navbutton image={aboutmeicon} alt="About" title="About"/>
            </Link>
            <Link to="/Skills">
                <Navbutton image={skillsicon} alt="Skills" title="Skills"/>
            </Link>
            <Link to="/Projects">
                <Navbutton image={projectsicon} alt="Projects" title="Projects"/>
            </Link>
            <Link to="/Contact">
                <Navbutton image={contacticon} alt="Contact" title="Contact"/>
            </Link> 
         </navbuttons>
         
         <sociallinks className="Sociallinks">
            <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="Socialicon"/>
            </a>
            <a target="blank" href="https://leetcode.com/bigpancake/">
                <Leetcodelogo className="Socialicon"/>
            </a>
            <a target="blank" href="http://www.linkedin.com">
                <Linkedinlogo className="Socialicon"/>
            </a>  
         </sociallinks>    
    </div>
)

export default Navigation;