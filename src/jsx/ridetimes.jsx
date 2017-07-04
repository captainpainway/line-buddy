import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import TimePopup from './timepopup.jsx';
import {store} from './main.jsx';

export class RideTimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.time = 0;
        this.name = "";
        this.status = "";
        this.updated = "";
        this.height = 1;
        this.color = "#333333";
        this.position = "0 1.1 0";
    }

    rideTimes() {
        let maxTime = 100;
        let data = this.props.data;
        let ride = this.props.ride;
        let park = this.props.park;
        if(data) {
            data[park].map((obj) => {
                if(obj.waitTime > maxTime) {
                    maxTime = obj.waitTime;
                }
            });
            data[park].map((obj) => {
                if(obj.id === ride) {
                    this.time = obj.waitTime;
                    this.name = obj.name;
                    this.status = obj.status;
                    this.updated = obj.lastUpdate;
                    if(obj.status == "Operating") {
                        var r, g, b;
                        r = Math.floor((255 * this.time) / 50);
                        g = Math.floor((255 * (maxTime - this.time)) / 50);
                        b = 0;
                        function toHex(e) {
                            var hex = e.toString(16);
                            if (hex.length === 1) {
                                return '0' + hex;
                            } else if (hex.length > 2){
                                return 'ff';
                            } else {
                                return hex;
                            }
                        }
                        var hexcolor = toHex(r) + toHex(g) + toHex(b);
                        this.color = "#" + hexcolor;
                        if(obj.waitTime < 5) {
                            this.height = 1;
                        } else {
                            this.height = obj.waitTime / 2;
                        }
                        this.position = "0 " + (this.height / 2 + 0.1) + " 0";
                    } else {
                        this.height = 1;
                        this.color = "#333333";
                        this.position = "0 1.1 0";
                    }
                }
            })
        }
    }

    handleClick() {
        this.setState({time: this.time, name: this.name, status: this.status, updated: this.updated});
        render(
            <TimePopup timeData={this.state} />,
            document.getElementById('popup')
        )
    }

    render() {
        this.rideTimes()
        return (
            <Entity class="clickable" events={{click: this.handleClick.bind(this)}} position={this.props.position}><Entity primitive="a-cylinder" id={this.props.ride} position={this.position} radius="1" height={this.height} color={this.color} /></Entity>
        )
    }
}