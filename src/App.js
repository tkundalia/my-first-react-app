import React, {Component} from 'react';
import './App.css';
import Title from './Title'
import LightSwitch from './components/LightSwitch.js'
import Clock from './Clock'




export default class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Title content="Switch Light On or Off"></Title>
            <LightSwitch />
            <Clock/>
          </header>       
      </div>
    );
  }
}



