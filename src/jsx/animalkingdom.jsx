import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import RideTimeData from './containers/ridetimedata.jsx';
import MenuData from './containers/menudata.jsx';

export default class AnimalKingdom extends React.Component {
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
                <MenuData park="AnimalKingdom" />
                <div className="parkName">Animal Kingdom</div>
                <div id="popup"></div>
                <Scene vr-mode-ui="enabled: false" antialias="true" embedded="true">
                    <a-assets>
                        <img id="AK" src="../../assets/akmap.png" onLoad={this.mapLoaded.bind(this)}></img>
                    </a-assets>
                    {/* Avatar Flight of Passage */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_18665186" position="-13 0 39" />
                    {/* Na'vi River Journey */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_18665185" position="-8 0 41" />
                    {/* It's Tough to be a Bug */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010150" position="5.5 0 10" />
                    {/* Kilimanjaro Safaris */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010157" position="-6 0 -6" />
                    {/* Kali River Rapids */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010154" position="25 0 -7" />
                    {/* Expedition Everest */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_26068" position="38 0 0" />
                    {/* Primeval Whirl */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010178" position="30 0 24" />
                    {/* Triceratop Spin */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010228" position="23 0 20" />
                    {/* Dinosaur */}
                    <RideTimeData park="AnimalKingdom" ride="WaltDisneyWorldAnimalKingdom_80010123" position="25 0 35" />

                    <Entity primitive="a-cylinder" id="map" position="3 0 -16" rotation="0 90 0" radius="90" height="1" material="shader: flat; src: #AK" />
                    <Entity id="cam-cursor" primitive="a-camera" rotation="-30 0 0" position="3 70 60" orbit-controls="target: #map; invertZoom: true; dampingFactor: 0.125; rotateSpeed: 0.25; autoRotate: false; maxPolarAngle: 1.5; zoomSpeed: 0.5" mouse-cursor />
                </Scene>
            </div>
        );
    }
}