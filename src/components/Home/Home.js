import React from 'react';
import './Home.css';
import Homemain from '../../Assets/Homemain.png';
import Homemobile from '../../Assets/Homemobile.png'
import Tilt from 'react-tilt';

const Home = () => (
    <div className="HomeContainer">
            <Tilt  options={{max:5, scale:1.03}}  >
                <div className="Tilt-inner"> 
                     
                    <img className="Homemain" src={Homemain} alt="lukassaylor"/>
                </div>
            </Tilt>
            
            
            <img className="Homemobile" src={Homemobile} alt="lukassaylor" />
            
    </div>
)

export default Home;