import React from "react";
import "./Home.css";
import Homemain from "../../Assets/Homemain.webp";
import Homemobile from "../../Assets/Homemobile.png";
import Tilt from "react-tilt";
import SecurityPlus from "../../Assets/securityplus.png";
import CloudPlus from "../../Assets/cloudplus.png";
import CSCP from "../../Assets/CSCP.png";

const Home = () => (
  <div className="HomeContainer">
    <div className="CertLogos">
      <img
        className="CertIcon"
        src={SecurityPlus}
        alt="comptia security+"
      ></img>
      <img className="CertIcon" src={CloudPlus} alt="comptia cloud+"></img>
      <img className="CertIcon" src={CSCP} alt="comptia CSCP"></img>
    </div>
    <Tilt options={{ max: 5, scale: 1.03 }}>
      <div className="Tilt-inner">
        <img className="Homemain" src={Homemain} alt="lukassaylor" />
      </div>
    </Tilt>

    <img className="Homemobile" src={Homemobile} alt="lukassaylor" />
  </div>
);

export default Home;
