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

    componentDidMount() {
        fetch("../json/rides.json", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(rides => {
            this.setState({rides});
        })
    }

    averageTimes() {
        if(this.props.data) {
            let total = 0;
            let count = 0;
            if(this.state.rides) {
                Object.values(this.state.rides[this.props.park]).map(rides => {
                    let idNum = rides['id'];
                    this.props.data[this.props.park].map(obj => {
                        if(obj.id === idNum && obj.active === true && obj.status === "Operating") {
                            total += parseInt(obj.waitTime);
                            count++;
                        }
                    });
                });
            }
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