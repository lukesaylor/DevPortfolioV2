import React from "react";
import "./About.css";
import Aboutimage from "../../Assets/Headshot.png";

const About = () => (
  <div className="Aboutcontainer">
    <h1 className="Aboutheader">About.</h1>
    <div className="AboutContent">
      <img className="Aboutimage" src={Aboutimage} alt="lukas saylor"></img>
      <div className="AboutText">
        <p>
          Hello, my name is Lukas Saylor and I am a web developer hailing from
          Fenwick Island, Delaware. My journey into coding began in 2018, upon
          graduating with a BA in Music from Salisbury University. I found that
          though music was my first love, the prospects of reliable and
          well-paying careers in music education were sparse at best. For many
          years prior I had an interest in programming and have always been
          tech-oriented and well versed in music production and graphic design
          software. While at a crossroads, and after much contemplation, I
          decided to take the first basic steps and learn the fundamentals of
          HTML and CSS.
        </p>
        <p>
          {" "}
          I was immediately hooked and began my journey, spending all of my free
          time trying to understand every possible facet of full-stack web
          development. After developing a solid foundation I began to study
          Javascript extensively, eventually putting most of my effort into the
          React framework. I found a love for programming and began to see the
          many parallels between programming and music, many of the higher-order
          thinking and technical execution concepts that helped me succeed in
          music also gave me a strong foundation to immerse myself in the
          programming lexicon. The attention to detail, concept of nesting ideas
          within one another, awareness of the hierarchical implications of
          small deviations, utilization of functional language, and ability to
          broaden or narrow perspective intelligently based on the requirements
          of the situation are all necessary in both the world of music
          performance/composition and computer programming. One incorrect note
          in a composition can "break" the intended tonality in the same way
          that one incorrect character in a line of code can compromise
          functionality to varying degrees. The cooperation and mutual
          understanding required among a group of musicians shares many
          fundamental ideals with the successful cooperative effort of a group
          of developers. Most importantly, my musical background has given me
          the desire to expand my knowledge and constantly continue education,
          which I believe to be paramount considering the ever-changing
          landscape of programming.
        </p>
        <p>
          {" "}
          Currently I am working as a freelance web developer striving to always
          increase the quality and efficiency of my output and deliver a client
          their uncompromised vision elevated transparently through my
          specialized knowledge. I am always searching for new opportunities to
          create and collaborate and would love to discuss potential projects.
        </p>
      </div>
    </div>
  </div>
);

export default About;
