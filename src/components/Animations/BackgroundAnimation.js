import React from "react";
import "./BackgroundAnimation.css";
import ParticleAnimation from "./ParticleAnimation";

const BackgroundAnimation = () => (
  <div className="Backgroundani">
    <ParticleAnimation
      height="400px"
      width="200px"
      top="0%"
      z="13"
      hex="#6FFFE9"
      ani="squareslide 40s infinite"
    />
    <ParticleAnimation
      height="200px"
      width="200px"
      top="30%"
      z="10"
      hex="#0B132B"
      ani="squareslide 80s infinite"
    />
    <ParticleAnimation
      height="500px"
      width="200px"
      top="25%"
      z="9"
      hex="#6FFFE9"
      ani="squareslide 60s infinite"
    />
    <ParticleAnimation
      height="250px"
      width="300px"
      top="75%"
      z="9"
      hex="#5BC0BE"
      ani="squareslide 20s infinite"
    />
    <ParticleAnimation
      height="400px"
      width="200px"
      top="10%"
      z="13"
      hex="#6FFFE9"
      ani="squaresliderev 40s infinite"
    />
    <ParticleAnimation
      height="200px"
      width="200px"
      top="40%"
      z="10"
      hex="#0B132B"
      ani="squaresliderev 80s infinite"
    />
    <ParticleAnimation
      height="500px"
      width="200px"
      top="35%"
      z="9"
      hex="#6FFFE9"
      ani="squaresliderev 60s infinite"
    />
    <ParticleAnimation
      height="250px"
      width="300px"
      top="85%"
      z="9"
      hex="#5BC0BE"
      ani="squaresliderev 20s infinite"
    />

    <ParticleAnimation
      height="40px"
      width="40px"
      top="5%"
      z="13"
      hex="#ffffff"
      ani="squareslide 10s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="25%"
      z="10"
      hex="#ffffff"
      ani="squareslide 8s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="30%"
      z="9"
      hex="#ffffff"
      ani="squareslide 4s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="78%"
      z="9"
      hex="#ffffff"
      ani="squareslide 9s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="15%"
      z="13"
      hex="#ffffff"
      ani="squaresliderev 6s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="45%"
      z="10"
      hex="#ffffff"
      ani="squaresliderev 12s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="40%"
      z="9"
      hex="#ffffff"
      ani="squaresliderev 8s infinite"
    />
    <ParticleAnimation
      height="40px"
      width="40px"
      top="90%"
      z="9"
      hex="#ffffff"
      ani="squaresliderev 7s infinite"
    />
  </div>
);

export default BackgroundAnimation;
