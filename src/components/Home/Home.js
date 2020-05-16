import React from 'react';
import './Home.css';
import Homemain from '../../Assets/Homemain.png';
import Homemobile from '../../Assets/Homemobile.png'

const Home = () => (
    <div className="HomeContainer">
            <img className="Homemain" src={Homemain} alt="lukassaylor" />
            <img className="Homemobile" src={Homemobile} alt="lukassaylor" />
            
    </div>
)

export default Home;