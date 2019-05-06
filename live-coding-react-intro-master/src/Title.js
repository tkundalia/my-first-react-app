import React, { Component } from 'react'

export default class Title extends Component {
    render(){
        return (
            <div>
                {
                    /* 
                    We get passed a prop called `content` 
                    from a parent component, 
                    we use it here. 
                    This makes this Title component Reusable
                    */
                }
                <h1> { this.props.content } </h1>
                <p>Hi</p>
            </div>
        )
    }
}