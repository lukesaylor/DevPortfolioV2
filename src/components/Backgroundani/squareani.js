import React from "react";
import './squareani.css';


const Squareani = (props) => (
    <div className="square"
        style={{
            boxSizing:"border-box",
            boxShadow:"20px 20px 10px",
            position:"fixed",
            height: props.height,
            width: props.width,
            top: props.top,
            zIndex: props.z,
            backgroundColor:props.hex,
            opacity:".1",
            borderRadius:"20px",
            animation: props.ani
            }}
    
    ></div>

);

export default Squareani;


 