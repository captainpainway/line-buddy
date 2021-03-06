import React from 'react';
import {render} from 'react-dom';

export default class TimePopup extends React.Component {
    constructor(props) {
        super(props);
        this.timeout;
        this.date;
    }

    componentDidMount() {
        this.updateAndAnimate();
    }

    componentDidUpdate() {
        this.updateAndAnimate();
    }

    updateAndAnimate() {
        this.refs.popup.style.display = "block";

        let winwidth = window.innerWidth;
        let winheight = window.innerHeight;
        let width = Math.min(400, (winwidth - 50));
        let height = this.refs.popup.offsetHeight;

        this.refs.popup.style.width = width + "px";
        this.refs.popup.style.top = ((winheight/2) - (height/2)) + 'px';
        this.refs.popup.style.left = ((winwidth/2) - (width/2)) + 'px';
        this.refs.popup.className = "slide-in-top";
    }

    processDate() {
        let date = new Date(this.props.timeData.updated);
        let options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        this.date = new Intl.DateTimeFormat('en-US', options).format(date);
    }

    handleRemovePopup() {
        this.refs.popup.className = "scale-out-center";
        setTimeout(() => {
            render(<div></div>, document.getElementById('popup'));
        }, 500)
    }

    render() {
        this.processDate();
        return (
            <div className="closebkg">
                <div id="time_popup" ref="popup" onClick={this.handleRemovePopup.bind(this)}>
                    <div id="ride_name">{this.props.timeData.name}</div>
                    <div id="status">{this.props.timeData.status}</div>
                    <div id="wait_time">{this.props.timeData.time} minutes</div>
                    <div id="updated">Last update: {this.date}</div>
                    <p>Click/tap to close</p>
                </div>
            </div>
        );
    }
}