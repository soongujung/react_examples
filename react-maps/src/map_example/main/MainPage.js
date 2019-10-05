import React, { Component, Fragment } from 'react';
import {loadNavermapsScript, NaverMap} from 'react-naver-maps';
import {Load} from 'load-js';
// import {NaverMap, RenderAfterNavermapsLoaded} from 'react-naver-maps';

class MainPage extends Component {

    // map = new naver.maps.Map('mapDiv', {option});
    constructor(props){
        super(props);
        const navermaps = window.naver.maps;
        this.state = {
            map: navermaps,
            input_latlng: '',
            zoomControl : true,
            zoom:2,
            mapTypeId: 'normal',
            center : navermaps.LatLng(36.796501, 127.594225), // 126.9861108, 37.4983439
            zoomControlOptions: {
                center: new navermaps.LatLng(36.796501, 127.594225), //36.4203004, 128.317960
                position: navermaps.Position.TOP_LEFT,
                style: navermaps.ZoomControlStyle.SMALL
            },
            scaleControl: true,
            draggable: true,
            scrollWheel: true,
            bounds: null, 
            jeju : navermaps.LatLng(33.3590628, 126.534361),
            dokdo : navermaps.LatLngBounds(
                navermaps.LatLng(37.2380651, 131.8562652),
                navermaps.LatLng(37.2444436, 131.8786475)
            ),
            seoul : navermaps.LatLngBounds(
                navermaps.LatLng(37.42829747263545, 126.76620435615891),
                navermaps.LatLng(37.7010174173061, 127.18379493229875)
            ),
            busan: navermaps.LatLng(35.1797865, 129.0750194)
        };
    }

    handleClick = (e) => {
        console.log('e.coord >>>', e.coord );
        this.setState({
            input_latlng: e.coord + ''
        });
    }

    handleToJeju = (e) =>{
        // let map = window.naver.maps.Map;
        let map = this.state.map;
        console.log('maps >>>', map);
        console.log('navermaps >>> ', window.naver);
        // map.setCenter(this.state.jeju);
        this.setState({
            center: this.state.jeju
        });
    };

    handleToZoomLevelOne = (e) =>{
        this.setState({
            zoom: 10
        });
    }

    render() {
        return (
            <Fragment>
                <div style={{width:'100%'}}>
                    <NaverMap id="mapDiv" 
                        style={{width : '100%',height:'600px', top: '40px'}}
                        onClick={this.handleClick}
                        center={this.state.center}
                        bounds={this.state.bounds}>
                    </NaverMap>
                </div>
            </Fragment>
        );
    }
}

export default MainPage;