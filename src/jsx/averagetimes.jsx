import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import {store} from './main.jsx';

export class AverageTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.average = '';
    }

    averageTimes() {
        if(this.props.data) {
            let total = 0;
            let count = 0;
            this.props.data[this.props.park].map((obj) => {
                if(obj.active === true) {
                    total += parseInt(obj.waitTime);
                    count++;
                }
            });
            let average = total / count ? Math.round(total / count) : 0;
            this.average = average + " minute average wait";
        }
    }

    render() {
        this.averageTimes();
        return (
            <div ref="times" className="time">{this.average}</div>
        )
    }
}