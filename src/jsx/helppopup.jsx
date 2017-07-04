import React from 'react';
import {render} from 'react-dom';

export default class HelpPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.timeout;
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
        return (
            <div className="closebkg">
                <div id="help_popup" ref="popup" onClick={this.handleRemovePopup.bind(this)}>
                    <h2>Desktop</h2>
                    <p>To rotate: Click and drag</p>
                    <p>To zoom: Scroll mouse wheel</p>
                    <p>Select ride: Click ride column</p>
                    <h2>Mobile/Tablet</h2>
                    <p>To rotate: Touch and drag</p>
                    <p>To zoom: Pinch in/out</p>
                    <p>Select ride: Tap ride column</p>
                    <p style={{"borderTop": "solid 1px #ccc", "paddingTop": "20px", "marginTop": "20px"}}>Click/tap to close</p>
                </div>
            </div>
        );
    }
}