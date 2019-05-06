import React, { Component } from 'react'






export default class LightSwitch extends Component {
  state = { active: true }
  
  componentDidMount(){
    console.log('Start clock ticking')
    fetch('https://swapi.co/api/people/1')
      .then(respone=>respone.json())
  }
  
  toggle = () => {            // always use arrow function, can not use 'function' word
    this.setState({
      //console.log('value of this here', this)
      active: !this.state.active
    })
  }

  render() {

    return (
        <div style={{backgroundColor: this.state.active ? 'Blue' : 'black'}}>       {/* notice-> 2 {{ .. }} */}
            <p>The Light Switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
            
            <button onClick={this.toggle}> Toggle </button>

        </div>)

  }
}


