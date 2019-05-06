import React, { Component } from 'react'



export default class Clock extends Component {

    state = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            milliseconds: new Date().getMilliseconds()
    }

    formatDigit = (digit) => {          //digit < 10 ? '0' + digit : digit
        if (digit < 10){
            return '0' + digit
        }
        return digit
    }

    tick = () => {
        this.setState({
            hours: this.formatDigit(new Date().getHours()),
            minutes: this.formatDigit(new Date().getMinutes()),
            seconds: this.formatDigit(new Date().getSeconds()),
            milliseconds: this.formatDigit(new Date().getMilliseconds())
        })
    }

    componentDidMount(){
        
        this.tick()
        setInterval(this.tick, 10)
    }


    render(){
        console.log(this.state)
        
        const {hours, minutes, seconds, milliseconds} = this.state      //// Destructuring (optional)

        return <h2>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
            :
            <span>{milliseconds}</span>

        </h2>
    }
}
 