import React from 'react';
import './App.css';

// Importing my home made components here:
import Title from './Title'
import LightSwitch from './LightSwitch'
import Clock from './Clock'

// Components can be functions too! (more on that later)
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* Use my components here */}
        <Clock />
        <h1>Hello world</h1>
        <Title content="cute authors"/>
        <LightSwitch />
      </header>
    </div>
  );
}

export default App;
