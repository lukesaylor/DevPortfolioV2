import React from 'react';
import './Backgroundani.css';
import Squareani from './squareani';

const Backgrounani = () => (
    <div className="Backgroundani">
    <Squareani/>
    <Squareani 
       h="500px"
       w="500px"
       toppad="50%"
       z="-15"
       hex="#6FFFE9"
       time="25s"
        />
    <Squareani 
        h="375px"
        w="375px"
        toppad="35%"
        z="10"
        hex="#0B132B"
        time="5s"
        />

    </div>
)

export default Backgrounani;