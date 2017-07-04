import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import WaitPopup from './waitpopup.jsx';
import HelpPopup from './helppopup.jsx';
import {store} from './main.jsx';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleClick() {
        let bool = this.state.open ? false : true;
        this.setState({open: bool})
    }

    handleWaitOpen() {
        this.handleClick();
        render(
            <WaitPopup data={this.props.data} park={this.props.park}/>,
            document.getElementById('popup')
        )
    }

    handleHelpOpen() {
        this.handleClick();
        render(
            <HelpPopup />,
            document.getElementById('popup')
        )
    }

    render() {
        let toggleClass = this.state.open ? 'open' : 'close';
        let arrowClass = this.state.open ? 'rotator' : '';
        return (
            <div id="menu" className={toggleClass}>
                <img id="menu_btn" src="../assets/icons/chevron-right.svg" className={arrowClass} onClick={this.handleClick.bind(this)}></img>
                <div id="menu_inner">
                    <ul>
                    <li><span id="title2">Line Buddy</span></li>
                    <li id="home"><Link to="/"><img src="../assets/icons/map.svg"></img><span>Change Park</span></Link></li>
                    <li id="wait" onClick={this.handleWaitOpen.bind(this)}><img src="../assets/icons/clock.svg"></img><span>Current Wait Times</span></li>
                    <li id="help" onClick={this.handleHelpOpen.bind(this)}><img src="../assets/icons/info.svg"></img><span>Help</span></li>
                    {/*<li><img src="../assets/icons/crosshair.svg"></img><span>Street View</span></li>
                    <li><img src="../assets/icons/filter.svg"></img><span>Filter by type</span></li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}