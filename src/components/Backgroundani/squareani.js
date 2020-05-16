import React from "react";
import './squareani.css';


const Squareani = (props) => (
    <div className="square"
        style={{
            position:"fixed",
            height:"{props.h}",
            width:"{props.w}",
            paddingTop:"{props.toppad}",
            zIndex:"{props.z}",
            backgroundColor:"{props.hex}",
            opacity:".4",
            borderRadius:"20px",
            animation:"squareslide {props.time} infinite"
        /*style={{
            position:"fixed",
            height:"300px",
            width:"300px",
            paddingTop:"10%",
            zIndex:"5",
            backgroundColor:"green",
            opacity:".4",
            borderRadius:"20px",
            animation:"squareslide 8s infinite"*/


            }}
    
    ></div>

);

export default Squareani;


 