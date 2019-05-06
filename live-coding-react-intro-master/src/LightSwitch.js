import React, { Component } from 'react'

export default class LightSwitch extends Component {
  state = { active: true }

  // LifeCycle Method componentDidMount, we can do something
  componentDidMount(){
    // component has mounted: celebrate LionKing style:
    console.log('HAAAAAAYYYYYYYY, MAASDFVASCAAAAAAA, HenjanaaaaaaAAA')

    // componentDidMount is often used to fetch data
    fetch('https://swapi.co/api/people/1')
        .then(response => response.json())
        .then(data => {
            // Call this.setState when the request has been completed
            this.setState({ name: data.name })
        })
  }

  componentDidUpdate(){
      // Showing another lifecycle method, 
      // this one is called after every update
      console.log('I AM REBORN!, sort of ')
  }

  toggle = () => {
    // Event handler, make sure it's an arrow function
    this.setState({
        active: !this.state.active
    })
  }

  render() {
    return (
        <div style={{ backgroundColor: this.state.active ? 'green' : 'black' }}>
            <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
            <button onClick={this.toggle}>Toggle</button>

            {/* When the request to the starwars api completes, we will see a name here */}
            <h1>{this.state.name}</h1>
        </div>
    )
  }
}