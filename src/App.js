import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import './App.scss';
import Home from './components/Home/Home.js';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import BackgroundAnimation from './components/Animations/BackgroundAnimation';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
 

function App() {
  return (
    <div className="App">
     <Router>
        <Navigation/>
        <SocialMediaLinks/>
        <BackgroundAnimation/>
      <Switch>
        <Route path="/" exact strict>
          <Home/>
        </Route> 
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Skills">
          <Skills/>
        </Route>
        <Route path="/Projects">
          <Projects/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
