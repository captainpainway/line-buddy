import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import RideTimeData from './containers/ridetimedata.jsx';
import MenuData from './containers/menudata.jsx';

export default class HollywoodStudios extends React.Component {
    constructor(props) {
        super(props);
    }

    mapLoaded() {
        setTimeout(() => {
            this.refs.wrapper.style.visibility = "visible";
            document.getElementById('loader').style.visibility = "hidden";
        }, 500);
    }

    render() {
        return (
            <div ref="wrapper" style={{visibility: "hidden"}}>
                <MenuData park="HollywoodStudios" />
                <div className="parkName">Hollywood Studios</div>
                <div id="popup"></div>
                <Scene vr-mode-ui="enabled: false" antialias="true" embedded="true">
                    <a-assets>
                        <img id="HS" src="../assets/hsmap.png" onLoad={this.mapLoaded.bind(this)}></img>
                    </a-assets>
                    {/* The Great Movie Ride */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010207" position="0 0 0" />
                    {/* Star Wars: Path of the Jedi */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_18240966" position="21 0 10" />
                    {/* Star Tours */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010193" position="25 0 18" />
                    {/* Muppet*Vision 3D */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010193" position="14 0 26" />
                    {/* Toy Story Mania! */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_209857" position="-10 0 6" />
                    {/* One Man's Dream */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010231" position="-10 0 -11" />
                    {/* Voyage of the Little Mermaid */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010229" position="-6 0 -14" />
                    {/* Star Wars Launch Bay Theater */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_18360041" position="-5 0 -21" />
                    {/* Rock 'n Roller Coaster */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010182" position="-5 0 -45" />
                    {/* Tower of Terror */}
                    <RideTimeData park="HollywoodStudios" ride="WaltDisneyWorldHollywoodStudios_80010218" position="10.5 0 -50.5" />

                    <Entity primitive="a-cylinder" id="map" position="3 0 -16" rotation="0 90 0" radius="90" height="1" material="shader: flat; src: #HS" />
                    <Entity id="cam-cursor" primitive="a-camera" rotation="-30 0 0" position="60 70 -70" orbit-controls="target: #map; invertZoom: true; dampingFactor: 0.125; rotateSpeed: 0.25; autoRotate: false; maxPolarAngle: 1.5; zoomSpeed: 0.5" mouse-cursor />
                    <Entity light="type: ambient; color: #999"></Entity>
                    <Entity light="type: directional; color: #fff; intensity: 0.6" position="60 70 -70"></Entity>
                </Scene>
            </div>
        );
    }
}