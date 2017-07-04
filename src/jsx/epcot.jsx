import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import RideTimeData from './containers/ridetimedata.jsx';
import MenuData from './containers/menudata.jsx';

export default class Epcot extends React.Component {
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
                <MenuData park="Epcot" />
                <div className="parkName">Epcot</div>
                <div id="popup"></div>
                <Scene vr-mode-ui="enabled: false" antialias="true" embedded="true">
                    <a-assets>
                        <img id="EP" src="../assets/epcotmap.png" onLoad={this.mapLoaded.bind(this)}></img>
                    </a-assets>
                    {/* Spaceship Earth */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010191" position="-2.5 0 -66" />
                    {/* Ellen's Energy Adventure */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010131" position="14 0 -60" />
                    {/* Mission: SPACE */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010173" position="24 0 -48" />
                    {/* Test Track */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010199" position="20.5 0 -38" />
                    {/* The Seas */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_107785" position="-18 0 -66" />
                    {/* Turtle Talk With Crush */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_62992" position="-22 0 -68" />
                    {/* Soarin */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_20194" position="-35 0 -38" />
                    {/* Living With The Land */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010161" position="-43.5 0 -50" />
                    {/* Journey Into Imagination */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010152" position="-25 0 -38" />
                    {/* Magic Eye Theater */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_18269694" position="-17 0 -32" />
                    {/* Gran Fiesta Tour */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_207395" position="26 0 -26" />
                    {/* Frozen Ever After */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_18375495" position="31 0 -8" />
                    {/* Reflections of China */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010180" position="30 0 2" />
                    {/* The American Adventure */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010200" position="-2.5 0 30" />
                    {/* Impressions de France */}
                    <RideTimeData park="Epcot" ride="WaltDisneyWorldEpcot_80010145" position="-43 0 15" />

                    <Entity primitive="a-cylinder" id="map" position="3 0 -16" rotation="0 90 0" radius="90" height="1" material="shader: flat; src: #EP" />
                    <Entity id="cam-cursor" primitive="a-camera" rotation="-30 0 0" position="1 70 -90" orbit-controls="target: #map; invertZoom: true; dampingFactor: 0.125; rotateSpeed: 0.25; autoRotate: false; maxPolarAngle: 1.5; zoomSpeed: 0.5" mouse-cursor />
                    <Entity light="type: ambient; color: #999"></Entity>
                    <Entity light="type: directional; color: #fff; intensity: 0.6" position="1 70 -90"></Entity>
                </Scene>
            </div>
        );
    }
}