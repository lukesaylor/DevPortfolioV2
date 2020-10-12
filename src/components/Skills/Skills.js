import React from "react";
import "./Skills.css";
import SkillsIconContainer from "./SkillsIconContainer";
import { ReactComponent as Githublogo } from "../../Assets/github.svg";
import { ReactComponent as PhotoshopLogo } from "../../Assets/SkillsIcons/adobephotoshop.svg";
import { ReactComponent as BootstrapLogo } from "../../Assets/SkillsIcons/bootstrap.svg";
import { ReactComponent as CSS3Logo } from "../../Assets/SkillsIcons/css3.svg";
import { ReactComponent as HTML5Logo } from "../../Assets/SkillsIcons/html5.svg";
import { ReactComponent as JavascriptLogo } from "../../Assets/SkillsIcons/javascript.svg";
import { ReactComponent as NPMLogo } from "../../Assets/SkillsIcons/npm.svg";
import { ReactComponent as ReactLogo } from "../../Assets/SkillsIcons/react.svg";
import { ReactComponent as ReactRouterLogo } from "../../Assets/SkillsIcons/reactrouter.svg";
import { ReactComponent as SassLogo } from "../../Assets/SkillsIcons/sass.svg";
import { ReactComponent as VisualStudioLogo } from "../../Assets/SkillsIcons/visualstudiocode.svg";
import { ReactComponent as NodeLogo } from "../../Assets/SkillsIcons/node-dot-js.svg";

const Skills = () => (
  <div className="Skillscontainer">
    <h1 className="Skillsheader">Skills</h1>
    <div className="SkillsContent">
      <div className="SkillsContentRow">
        <div className="SkillsContentColumn">
          <SkillsIconContainer
            title="Javascript"
            skillModalText=" High understanding and implementation ability of javascript concepts such as scope, type, inheritance, built-in javascript object and array methods, functions, and loops. Functional understanding of ES6 and above features as well as more advanced concepts such as async functions, hoisting, prototypes, memoization, async & await, promises, and the implementation of Domain Driven Design"
          >
            <JavascriptLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="HTML5"
            skillModalText="Solid understanding of all common HTML/JSX elements such as forms, tables, lists, etc."
          >
            <HTML5Logo />
          </SkillsIconContainer>
          <SkillsIconContainer title >
            <CSS3Logo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer>
            <ReactLogo />
          </SkillsIconContainer>
          <SkillsIconContainer>
            <BootstrapLogo />
          </SkillsIconContainer>
          <SkillsIconContainer>
            <Githublogo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer>
            <VisualStudioLogo />
          </SkillsIconContainer>
          <SkillsIconContainer>
            <NPMLogo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer>
            <SassLogo />
          </SkillsIconContainer>
          <SkillsIconContainer>
            <NodeLogo />
          </SkillsIconContainer>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
