import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'aframe';
import 'aframe-mouse-cursor-component';
import 'aframe-orbit-controls-component-2';
import MagicKingdom from './magickingdom.jsx';
import Epcot from './epcot.jsx';
import HollywoodStudios from './hollywoodstudios.jsx';
import AnimalKingdom from './animalkingdom.jsx';
import { AverageTime } from './ridetimes.jsx';
import AverageTimeData from './containers/averagetimedata.jsx';
import configureStore from '../store/configureStore';
import { updateData } from '../actions/actions';

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/magickingdom"component={MagicKingdom} />
                <Route path="/epcot" component={Epcot} />
                <Route path="/hollywoodstudios" component={HollywoodStudios} />
                <Route path="/animalkingdom" component={AnimalKingdom} />
            </Switch>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.components = {
            "MagicKingdom": MagicKingdom,
            "Epcot": Epcot,
            "HollywoodStudios": HollywoodStudios,
            "AnimalKingdom": AnimalKingdom
        };
    }

    componentWillMount() {
        document.getElementById('loader').style.visibility = "visible";
    }

    handleClick(e) {
        const target = e.target.id;
        const link = "/" + target.toLowerCase();
         
        e.target.classList.add('jello-horizontal');

        setTimeout(() => {
            this.setState({redirect: true, dir: {link}});
        }, 1000);
    }

    render() {
        if(this.state.redirect) {
            return <Redirect push to={this.state.dir.link} />
        }
        return (
            <div>
                <div id="frontpage">
                    <div id="title">Line Buddy<div>Ride wait times and park information.</div></div>
                    <div className="header">Walt Disney World Resort</div>
                    <div className="row">
                        <div id="MagicKingdom" className="park" onClick={this.handleClick.bind(this)}>
                            <div className="name"><span style={{fontSize: "3.4em"}}>Magic</span> <span style={{fontSize: "2.3em"}}>Kingdom</span></div>
                            <AverageTimeData park="MagicKingdom" />
                        </div>
                        <div id="Epcot" className="park" onClick={this.handleClick.bind(this)}>
                            <div className="name" style={{paddingTop: "5em"}}><span style={{fontSize: "3.2em"}}>Epcot</span></div>
                            <AverageTimeData park="Epcot" />
                        </div>
                        <div id="HollywoodStudios" className="park" onClick={this.handleClick.bind(this)}>
                            <div className="name"><span style={{fontSize: "1.7em"}}>Hollywood</span> <span style={{fontSize: "2.5em"}}>Studios</span></div>
                            <AverageTimeData park="HollywoodStudios" />
                        </div>
                        <div id="AnimalKingdom" className="park" onClick={this.handleClick.bind(this)}>
                            <div className="name"><span style={{fontSize: "2.8em"}}>Animal</span> <span style={{fontSize: "2.3em"}}>Kingdom</span></div>
                            <AverageTimeData park="AnimalKingdom" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const store = configureStore();

store.dispatch(updateData());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);