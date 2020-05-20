import React from 'react';
import './Skills.css';
import SkillsIconContainer from './SkillsIconContainer';
import {ReactComponent as Githublogo} from '../../Assets/github.svg';
import {ReactComponent as PhotoshopLogo} from '../../Assets/SkillsIcons/adobephotoshop.svg';
import {ReactComponent as BootstrapLogo} from '../../Assets/SkillsIcons/bootstrap.svg';
import {ReactComponent as CSS3Logo} from '../../Assets/SkillsIcons/css3.svg';
import {ReactComponent as HTML5Logo} from '../../Assets/SkillsIcons/html5.svg';
import {ReactComponent as JavascriptLogo} from '../../Assets/SkillsIcons/javascript.svg';
import {ReactComponent as NPMLogo} from '../../Assets/SkillsIcons/npm.svg';
import {ReactComponent as ReactLogo} from '../../Assets/SkillsIcons/react.svg';
import {ReactComponent as ReactRouterLogo} from '../../Assets/SkillsIcons/reactrouter.svg';
import {ReactComponent as SassLogo} from '../../Assets/SkillsIcons/sass.svg';
import {ReactComponent as VisualStudioLogo} from '../../Assets/SkillsIcons/visualstudiocode.svg';
import {ReactComponent as WiresharkLogo} from '../../Assets/SkillsIcons/wireshark-icon.svg';
import SecurityPlus from '../../Assets/securityplus.png';

const Skills = () => (
    <div className="Skillscontainer">
    <img className="securityplus" src={SecurityPlus} alt="comptia security+"></img>
            <h1 className="Skillsheader">Skills</h1>
        <div className="SkillsContent">
            <div className="SkillsContentRow">
                <div className="SkillsContentColumn"> 
                    <SkillsIconContainer><JavascriptLogo/></SkillsIconContainer>
                    <SkillsIconContainer><HTML5Logo/></SkillsIconContainer>
                    <SkillsIconContainer><CSS3Logo/></SkillsIconContainer>
                </div>
                <div className="SkillsContentColumn"> 
                    <SkillsIconContainer><ReactLogo/></SkillsIconContainer>
                    <SkillsIconContainer><BootstrapLogo/></SkillsIconContainer>
                    <SkillsIconContainer><Githublogo/></SkillsIconContainer>
                </div>
                <div className="SkillsContentColumn"> 
                    <SkillsIconContainer><VisualStudioLogo/></SkillsIconContainer>
                    <SkillsIconContainer><ReactRouterLogo/></SkillsIconContainer>
                    <SkillsIconContainer><NPMLogo/></SkillsIconContainer>
                     
                </div>
                <div className="SkillsContentColumn"> 
                    <SkillsIconContainer><SassLogo/></SkillsIconContainer>
                    <SkillsIconContainer><PhotoshopLogo/></SkillsIconContainer>
                    <SkillsIconContainer style={{width:"20vw"}}><WiresharkLogo/></SkillsIconContainer>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;