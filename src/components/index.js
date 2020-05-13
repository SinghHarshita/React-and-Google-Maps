import React, { Component } from 'react'
import Maps from './marker';

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text : 'Hello',
            mapText : 'Place Name',
            lat: 19.07283,
            lng : 72.88261
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText = () => {
        this.setState(
            {
                mapText : 'World!',
                lat: 24.571270,
                lng: 73.691544,
                text: 'Changing lat lng'
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.text}
                <br />
                <button onClick={this.changeText}> Change Text</button>
                <Maps 
                    latitude={this.state.lat}
                    longitude={this.state.lng}
                    mapText={this.state.mapText}
                />
                <br/>
                <p>
                    {this.state.lat}
                    <br />
                    {this.state.lng}
                    <br />
                    {this.state.mapText}
                </p>
            </div>

        )
    }
}
