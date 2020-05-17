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
import Backgroundani from './components/Backgroundani/Backgroundani';
 

function App() {
  return (
    <div className="App">
     <Router>

      <Navigation/>
      <Backgroundani/>
    
      <Switch>
        <Route path="/" exact strict>
          <Home/>
        </Route> 
        <Route path="/About">
          <About/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
