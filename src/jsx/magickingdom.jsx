import React from 'react';
import {render} from 'react-dom';
import {Entity, Scene} from 'aframe-react';
import RideTimeData from './containers/ridetimedata.jsx';
import MenuData from './containers/menudata.jsx';

export default class MagicKingdom extends React.Component {
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
                <MenuData park="MagicKingdom" />
                <div className="parkName">Magic Kingdom</div>
                <div id="popup"></div>
                <Scene vr-mode-ui="enabled: false" antialias="true" embedded="true">
                    <a-assets>
                        <img id="MK" src="../assets/mkmap.png" onLoad={this.mapLoaded.bind(this)}></img>
                    </a-assets>
                    {/* Stitch's Great Escape */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_5490" position="24 0 5.5" />
                    {/* Monsters Inc Laugh Floor */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_136550" position="21.5 0 8.7" />
                    {/* WDW Railroad: Frontierland */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_2219610" position="-56.5 0 -13.4" />
                    {/* Tiki Room */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16124144" position="-36 0 10.3" />
                    {/* The Barnstormer */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16491297" position="41.6 0 -29.8" />
                    {/* WDW Railroad: Fantasyland */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16491299" position="41.7 0 -36.6" />
                    {/* Casey Jr Spash Station */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16512939" position="37.6 0 -34.8" />
                    {/* Journey of the Little Mermaid */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16767263" position="19.8 0 -37.8" />
                    {/* Enchanted Tales With Belle */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16767276" position="2.6 0 -36.6" />
                    {/* Seven Dwarfs Mine Train */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_16767284" position="18.8 0 -28" />
                    {/* Astro Orbiter */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010107" position="32 0 8" />
                    {/* Big Thunder Mountain Railroad */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010110" position="-49.3 0 -19.4" />
                    {/* Buzz Lightyear */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010114" position="26.8 0 9.2" />
                    {/* Prince Charming Regal Carrousel */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010117" position="0.7 0 -20.4" />
                    {/* Dumbo the Flying Elephant */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010129" position="33.4 0 -28.3" />
                    {/* it's a small world */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010149" position="-12.4 0 -29" />
                    {/* Jungle Cruise */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010153" position="-31.7 0 14.2" />
                    {/* Liberty Square Riverboat */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010160" position="-22.8 0 -13.4" />
                    {/* Mad Tea Party */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010162" position="21.3 0 -20.4" />
                    {/* Mickey's Philharmagic */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010170" position="-2.9 0 -19.8" />
                    {/* Peter Pan's Flight */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010176" position="-9.7 0 -21.4" />
                    {/* Pirates of the Caribbean */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010177" position="-46 0 15" />
                    {/* Space Mountain */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010190" position="47 0 -0.2" />
                    {/* Splash Mountain */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010192" position="-61 0 -8" />
                    {/* Swiss Family Treehouse */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010196" position="-23.4 0 6.1" />
                    {/* Haunted Mansion */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010208" position="-24.1 0 -22.6" />
                    {/* The Magic Carpets of Aladdin */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010210" position="-32.3 0 8" />
                    {/* Winnie the Pooh */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010213" position="13.5 0 -22.2" />
                    {/* Tom Sawyer Island */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010220" position="-44.7 0 -11.6" />
                    {/* Tomorrowland Speedway */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010222" position="28.7 0 -10" />
                    {/* TTA Peoplemover */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010224" position="32.6 0 11.7" />
                    {/* WDW Railroad: Main Street */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010230" position="0.7 0 46" />
                    {/* Carousel of Progress */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80010232" position="33.8 0 15.5" />
                    {/* Country Bear Jamboree */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80069748" position="-38.1 0 2" />
                    {/* The Hall of Presidents */}
                    <RideTimeData park="MagicKingdom" ride="WaltDisneyWorldMagicKingdom_80069754" position="-15.5 0 -11.4" />

                    <Entity primitive="a-cylinder" id="map" position="3 0 -16" rotation="0 90 0" radius="90" height="1" material="shader: flat; src: #MK" />
                    <Entity id="cam-cursor" primitive="a-camera" rotation="-30 0 0" position="3 70 60" orbit-controls="target: #map; invertZoom: true; dampingFactor: 0.125; rotateSpeed: 0.25; autoRotate: false; maxPolarAngle: 1.5; zoomSpeed: 0.5" mouse-cursor />
                    <Entity light="type: ambient; color: #999"></Entity>
                    <Entity light="type: directional; color: #fff; intensity: 0.6" position="3 70 60"></Entity>
                </Scene>
            </div>
        );
    }
}