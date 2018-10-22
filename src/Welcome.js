import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
             <h1  style={{
                fontSize: '70px',
                textAlign: 'center',
                // backgroundColor: 'black',
                color: 'white',
                fontFamily: 'Lobster',
                display: 'flex',
                justifyContent: 'center'
            }}
            >
            <img src='https://66.media.tumblr.com/74a193a372cdfcb93b4056e5e616367c/tumblr_nxgvmyV0NF1uappnpo1_500.png'
            alt='totoro studio' 
            style={{
                height: '50px',
                width: '100px',
                color: 'white'
            }}
            />
            Studio Ghibli Cards
            </h1>
        );
    }
}

export default Welcome;