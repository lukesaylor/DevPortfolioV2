import React from "react";
import "./Skills.css";
import SkillsIconContainer from "./SkillsIconContainer";
import { ReactComponent as Githublogo } from "../../Assets/github.svg";
import { ReactComponent as BootstrapLogo } from "../../Assets/SkillsIcons/bootstrap.svg";
import { ReactComponent as CSS3Logo } from "../../Assets/SkillsIcons/css3.svg";
import { ReactComponent as HTML5Logo } from "../../Assets/SkillsIcons/html5.svg";
import { ReactComponent as JavascriptLogo } from "../../Assets/SkillsIcons/javascript.svg";
import { ReactComponent as ReactLogo } from "../../Assets/SkillsIcons/react.svg";
import { ReactComponent as VisualStudioLogo } from "../../Assets/SkillsIcons/visualstudiocode.svg";
import { ReactComponent as NodeLogo } from "../../Assets/SkillsIcons/node-dot-js.svg";
import { ReactComponent as JestLogo } from "../../Assets/SkillsIcons/jest.svg";
import { ReactComponent as TypescriptLogo } from "../../Assets/SkillsIcons/typescript.svg";
import { ReactComponent as AzureLogo } from "../../Assets/SkillsIcons/azure.svg";
import { ReactComponent as Dynamics365Logo } from "../../Assets/SkillsIcons/dynamics365.svg";

const Skills = () => (
  <div className="Skillscontainer">
    <h1 className="Skillsheader">Skills</h1>
    <div className="SkillsContent">
      <div className="SkillsContentRow">
        <div className="SkillsContentColumn">
          <SkillsIconContainer
            title="Javascript"
            skillModalText=" High understanding and implementation ability of javascript concepts such as scope, type, inheritance, built-in javascript object and array methods, functions, and loops. Functional understanding of ES6 and above features as well as more advanced concepts such as async functions, hoisting, prototypes, memoization, async & await, and promises."
          >
            <JavascriptLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="HTML5"
            skillModalText="Solid understanding of all common HTML/JSX elements such as forms, tables, lists, etc."
          >
            <HTML5Logo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="Jest"
            skillModalText="Experience writing tests and mocking in Jest."
          >
            <JestLogo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer
            title="React"
            skillModalText="Advanced knowledge of the React library. full understanding of React components, props and state management with both class-based components and function components using React Hooks. experience creating custom hooks utilizing higher-order components."
          >
            <ReactLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="Bootstrap"
            skillModalText="Experience using Bootstrap components in vanilla JS and well as implementation in React. Applicable knowledge in creating Bootstrap themes as well as modifying Bootstrap classes."
          >
            <BootstrapLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="Typescript"
            skillModalText="Versed in Typescript React development as well as Jest Testing in Typescript. Experience implementing enums and defining types."
          >
            <TypescriptLogo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer
            title="Visual Studio"
            skillModalText="Competency developing and using version control in Visual Studio. Aptitude in utizling VS extensions to streamline development and increase effeciency."
          >
            <VisualStudioLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="GitHub"
            skillModalText="Knowledge of implementing Git version control and managing branches, merging code, and completing pull requests."
          >
            <Githublogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="Azure"
            skillModalText="Experience hosting app in the Azure environment, Azure Pipelines, as well as provisioning VMs writing Azure Functions serverless applications."
          >
            <AzureLogo />
          </SkillsIconContainer>
        </div>
        <div className="SkillsContentColumn">
          <SkillsIconContainer
            title="NodeJS"
            skillModalText="Experience creating Node servers and ultilizing NPM packages"
          >
            <NodeLogo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="CSS3"
            skillModalText="Firm grasp of CSS syntax including CSS Grid and Flex, experience with numerous CSS libraries such as Material UI and Bootstrap. Experience implementing new CSS technologies within React such as Styled Components and CSS Modules "
          >
            <CSS3Logo />
          </SkillsIconContainer>
          <SkillsIconContainer
            title="Dynamics 365"
            skillModalText="Experience in PowerApps building forms and utilizing web resources."
          >
            <Dynamics365Logo />
          </SkillsIconContainer>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
