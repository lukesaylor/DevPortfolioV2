import React from 'react';
import './SocialMediaLinks.css';
import {ReactComponent as Githublogo} from '../../Assets/github.svg';
import {ReactComponent as Leetcodelogo} from '../../Assets/leetcode.svg';
import {ReactComponent as Linkedinlogo} from '../../Assets/linkedin.svg';

const SocialMediaLinks = () => (
    <div className="SocialMediaContainer">
         
            <a target="blank" href="https://github.com/lukesaylor">
                <Githublogo className="SocialIcon"/>
            </a>
            <a target="blank" href="https://leetcode.com/bigpancake/">
                <Leetcodelogo className="SocialIcon"/>
            </a>
            <a target="blank" href="http://www.linkedin.com/in/LukasSaylor/">
                <Linkedinlogo className="SocialIcon"/>
            </a>  
           
    </div>
);

export default SocialMediaLinks;