import React from 'react';
import {render} from 'react-dom';

export default class WaitPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.timeout;
        this.rides = [];
    }

    componentDidMount() {
        this.updateAndAnimate();
    }

    componentDidUpdate() {
        this.updateAndAnimate();
    }

    getWaitTimes() {
        this.props.data[this.props.park].map((obj) => {
            if(obj.status == "Operating") {
                this.rides.push([obj.name, obj.waitTime]);
            }
        });
        this.rides.sort((a, b) => {
            return a[1] - b[1];
        })
    }

    updateAndAnimate() {
        this.refs.popup.style.display = "block";

        let winwidth = window.innerWidth;
        let winheight = window.innerHeight;
        let width = Math.min(400, (winwidth - 50));
        let height = 400;

        this.refs.popup.style.width = width + "px";
        this.refs.popup.style.top = ((winheight/2) - (height/2)) + 'px';
        this.refs.popup.style.left = ((winwidth/2) - (width/2)) + 'px';
        this.refs.popup.className = "slide-in-top";
    }

    handleRemovePopup() {
        this.refs.popup.className = "scale-out-center";
        setTimeout(() => {
            render(<div></div>, document.getElementById('popup'));
        }, 500)
    }

    render() {
        this.getWaitTimes();
        const times = this.rides.map((val) => {
            return (
                <div className="waitrow" key={val[0]}>
                    <div>{val[0]}</div>
                    <div>{val[1]} minutes</div>
                </div>
            )
        })
        return (
            <div className="closebkg">
                <div id="wait_popup" ref="popup" onClick={this.handleRemovePopup.bind(this)}>
                    {times}
                    <p>Click/tap to close</p>
                </div>
            </div>
        );
    }
}