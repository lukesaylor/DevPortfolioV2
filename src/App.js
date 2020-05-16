import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home.js';
import Backgroundani from './components/Backgroundani/Backgroundani';
 

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Backgroundani/>
     <Home/>

    </div>
  );
}

export default App;
