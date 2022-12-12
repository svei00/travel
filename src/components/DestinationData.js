import './destination.css'
import React, { Component } from 'react';

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='descTwo'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </div>
            <div className='pics'>
                <img alt='firts one' src={this.props.img1} />
                <img alt='Second one' src={this.props.img2} />
            </div>
        </div>
        );
    }
}

export default DestinationData;
