
import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
        <h1> {this.props.content }</h1>
        
    )
  }
}


/* allowed
return (
        <>
          <h1>Hello</h1>
        </>
    )
*/