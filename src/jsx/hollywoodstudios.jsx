import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import RideTimeData from './containers/ridetimedata.jsx';
import MenuData from './containers/menudata.jsx';

export default class HollywoodStudios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: {}
        }
    }

    mapLoaded() {
        setTimeout(() => {
            this.refs.wrapper.style.visibility = "visible";
            document.getElementById('loader').style.visibility = "hidden";
        }, 500);
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
            const rideData = rides['HollywoodStudios'];
            this.setState({rides: rideData});
        })
    }

    render() {
        const rides = Object.values(this.state.rides).map((value, index) => {
            return (
                <RideTimeData park="HollywoodStudios" key={"HS" + index} ride={value['id']} position={value['position']} />
            )
        })
        return (
            <div ref="wrapper" style={{visibility: "hidden"}}>
                <MenuData park="HollywoodStudios" />
                <div className="parkName">Hollywood Studios</div>
                <div id="popup"></div>
                <Scene vr-mode-ui="enabled: false" antialias="true" embedded="true">
                    <a-assets>
                        <img id="HS" src="../assets/hsmap2.jpg" onLoad={this.mapLoaded.bind(this)}></img>
                    </a-assets>
                    {rides}

                    <Entity primitive="a-cylinder" id="map" position="3 0 -16" rotation="0 90 0" radius="90" height="1" material="shader: flat; src: #HS" />
                    <Entity id="cam-cursor" primitive="a-camera" rotation="-30 0 0" position="60 70 -70" orbit-controls="target: #map; invertZoom: true; dampingFactor: 0.125; rotateSpeed: 0.25; autoRotate: false; maxPolarAngle: 1.5; zoomSpeed: 0.5" mouse-cursor />
                    <Entity light="type: ambient; color: #999"></Entity>
                    <Entity light="type: directional; color: #fff; intensity: 0.6" position="60 70 -70"></Entity>
                </Scene>
            </div>
        );
    }
}