import React, { Component } from 'react';
import axios from 'axios';

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            joke: ''
        }
    }

    componentDidMount() {
            axios.get('http://numbersapi.com/random/math').then(res => {
            this.setState({
                joke: res.data
            })        

            })
        }


    render() {
        let {joke} = this.state
        return(
            <h1 style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}> FunFact: { joke }</h1 >
        );
    }
}

export default Cards;