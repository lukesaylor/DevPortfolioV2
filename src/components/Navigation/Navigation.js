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



const Navigation = () => (
    <div className="Navigation">
         <img src={lsicon} alt="Logo" className="LSicon"/>
          
         <navbuttons className="Navbuttons">
             <Navbutton image={homeicon} alt="Home" title="Home"/>
             <Navbutton image={aboutmeicon} alt="About" title="About"/>
             <Navbutton image={skillsicon} alt="Skills" title="Skills"/>
             <Navbutton image={projectsicon} alt="Projects" title="Projects"/>
             <Navbutton image={contacticon} alt="Contact" title="Contact"/>
             
         </navbuttons>
         
         <sociallinks className="Sociallinks">
            <Githublogo className="Socialicon"/>
            <Leetcodelogo className="Socialicon"/>
            <Linkedinlogo className="Socialicon"/>  
         </sociallinks>    
    </div>
)

export default Navigation;