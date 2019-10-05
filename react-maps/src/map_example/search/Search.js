import React, { Component } from 'react';
import {loadNavermapsScript, NaverMap} from 'react-naver-maps';
import {Script} from 'react-load-script';
import AddressList from './AddressList'

const loadNaverMap = (state, fn) =>{
    const existing = document.getElementById('naverMap');
    if(!existing){
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7fsdkjz4mn&amp;submodules=geocoder';
        script.id = 'naverMap';
        document.body.appendChild(script);

        script.onload = () =>{
            state.naverMapReady = true;
            fn();
        };
    }
    if(existing && state) {
        state.naverMapReady = true;
        fn();
    }
};


// let searchResult = [];

class Search extends Component {

    state = {
        naverMapReady : false,
        map : null,
        addressList: [],
        inputText : '',
        center : window.naver.maps.LatLng(37.4983439, 126.9861108)
    };
    
    constructor(props){
        super(props);
    }

    componentWillMount(){
        loadNaverMap(this.state, this.initMap);
    }
    
    handleTest = (e) => {
        // window.naver.maps.Map;
        let map = window.naver.maps;
        console.log('click, map :: >>> ', map);
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
    }

    initMap = () => {
        if(this.state.naverMapReady){
            this.setState({
                map: window.naver.maps
            });

            let map = window.naver.maps;

            map = map.Map(document.getElementById('mapDiv'),{
                // (lat:36.4797337,lng:127.2891962)
                center: new map.LatLng(36.4797337, 127.2891962),
                zoom: 11,
                mapTypeControl: true
            });

        }
    }

    handleSearchResult = (result) =>{
        console.log('callback !!! >>> ', result);
        this.setState({
            addressList: result
        });
        console.log('this.state >>> ', this.state);
    }

    searchAddressToLatLng = (str_address, fn) => {
        let map = window.naver.maps;
        console.log('map >>>', map);
        if(str_address === ''){
            str_address = '서울시 서초구 방배동 750-14';
        }

        map.Service.geocode({
            address: str_address + ''
        }, 
        function(status, response){
            if(status === map.Service.Status.ERROR){
                return alert('에러 발생');
            }
            console.log('this >>> ', this);
            console.log('items >>> ', response.result.items);
            fn(response.result.items);
        })
    }

    componentDidMount = () => {
        loadNavermapsScript({
            ncpClientId :'7fsdkjz4mn',
            submodules: 'geocoder'
        })
        .then((navermap) => {
            console.log('componentDidMount >>> ', navermap);
            let map = new navermap.Map('mapDiv',{
                center : new navermap.LatLng(37.4983439, 126.9861108)
            });
        });
    }

    // <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7fsdkjz4mn&amp;submodules=geocoder&amp;callback=initMap"></script>
    render() {
        return (
            <div>
                <div>
                    <h1>Search 페이지</h1>
                    <div>
                        <input  value={this.state.inputText} 
                                id="address"
                                onChange={this.handleChange} 
                                placeholder="주소 입력" 
                                style={{width: '50%'}}></input>
                        {/* <button onClick={this.searchAddressToLatLng}> TEST </button> */}
                        <button onClick={()=>{
                            this.searchAddressToLatLng(this.state.inputText, this.handleSearchResult)
                        }}>TEST</button>
                    </div>
                    
                    <div id="mapDiv" 
                        style={{height:'600px', width: '100%'}}>
                            <p>success</p>
                    </div>
                    {/* tryl 1 */}
                    {/* {this.state.naverMapReady ? 
                        <div id="mapDiv" 
                            style={{height:'30px', width: '100%'}}>
                                <p>success</p>
                        </div>
                        : ''}
                    <NaverMap id="mapDiv2" style={{height:'600px', width: '100%'}}
                        onClick={this.handleClick}
                        center={this.state.center}
                        bounds={this.state.bounds}>
                    </NaverMap> */}
                </div>
                <div>
                    <h2>검색 결과</h2>
                    <div id="search_result" style={{height: '300px'}}>
                        {/* <ul>
                            {this.state.addressList.forEach( (item) =>{
                                return <li>{item.address}</li>
                            })}
                        </ul> */}
                        <ul>
                            <AddressList addressList={this.state.addressList}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;