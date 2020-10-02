import React from "react";
import "./Navigation.css";
import lsicon from "../../Assets/LSicon.png";
import homeicon from "../../Assets/home.png";
import skillsicon from "../../Assets/skills.png";
import aboutmeicon from "../../Assets/aboutme.png";
import projectsicon from "../../Assets/projects.png";
import contacticon from "../../Assets/contact.png";

import Navbutton from "../Navigation/Navbutton";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="Navigation">
    <img src={lsicon} alt="Logo" className="LSicon" />

    <navbuttons className="Navbuttons">
      <Link to="/">
        <Navbutton image={homeicon} alt="Home" title="Home" />
      </Link>
      <Link to="/About">
        <Navbutton image={aboutmeicon} alt="About" title="About" />
      </Link>
      <Link to="/Skills">
        <Navbutton image={skillsicon} alt="Skills" title="Skills" />
      </Link>
      <Link to="/Projects">
        <Navbutton image={projectsicon} alt="Projects" title="Projects" />
      </Link>
      <Link to="/Contact">
        <Navbutton image={contacticon} alt="Contact" title="Contact" />
      </Link>
    </navbuttons>
  </div>
);

export default Navigation;
