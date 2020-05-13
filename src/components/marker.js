import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const cities = [
    {name: 'Mumbai, India', position: {lat: 19.07283,lng: 72.88261}},
    {name: 'Bhubaneshwar, India', position: {lat: 20.296059,lng: 85.824539}},
    {name: 'Lucknow, India', position: {lat: 26.850000,lng: 80.949997}},
    {name: 'Delhi, India', position: {lat: 28.610001,lng: 77.230003}},
    {name: 'Amaravati, India', position: {lat: 14.685564,lng: 77.595406}},
    {name: 'Itanagar, India', position: {lat: 27.1,lng: 93.62}},
    {name: 'Guwahati, India', position: {lat: 26.148043,lng: 91.731377}},
    {name: 'Patna, India', position: {lat: 25.612677,lng: 85.158875}},
    {name: 'Chandigarh, India', position: {lat: 30.741482,lng: 76.768066}},
    {name: 'Rome, Italy', position: {lat: 41.890251,lng: 12.492373}},
    {name: 'London, UK', position: {lat: 51.509865,lng: -.118092}},
    {name: 'Madrid, Spain', position: {lat: 40.416775,lng: -3.703790}},
    {name: 'Athens, Greece', position: {lat: 37.983810,lng: 23.727539}},
    {name: 'Tokyo, Japan', position: {lat: 35.652832,lng: 139.839478}},
    // {name: 'Madrid, Spain', position: {lat: 40.416775,lng: -3.703790}},
]

class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        

        this.renderMarkers = this.renderMarkers.bind(this);
        this.changeMapCenter = this.changeMapCenter.bind(this);

        this.state = {
            active: 0,
            mapCenter: cities[0]['position'],
            markerText : cities[0]['name'],
        };
    }

    renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: this.state.mapCenter,
            map,
            title: this.state.markerText
        });

        this.setState({
            map: map,
            maps: maps,
            marker: marker
        })

        return marker;
    };

    changeMapCenter = (e) => {
        const index = e.target.value
        this.state.mapCenter = cities[index]['position']
        this.state.markerText = cities[index]['name']
        this.forceUpdate();

        this.state.map.setCenter(this.state.mapCenter)
        this.state.marker.setMap(null)
        this.renderMarkers(this.state.map, this.state.maps)
        console.log(this.state.marker.title)
    }

    render() {
        return (
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={this.state.mapCenter}
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
                >
                </GoogleMapReact>

                <br />
                <form className="form">
                    <select onChange={this.changeMapCenter}>
                        {cities.map((city, index) => {
                            return (<option value={index}>{city.name}</option>)
                        })}
                    </select>
                    {/* <button type="submit" onClick={() => this.changeMapCenter(1)}>Change Center</button> */}
                </form>
                
            </div>
        )
    }
}

// const GoogleMaps = ({ latitude, longitude, mapText }) => {
//     const renderMarkers = (map, maps) => {
//         let marker = new maps.Marker({
//             position: { lat: latitude,
//             lng: longitude },
//             map,
//             title: mapText
//         });
//         return marker;
//     };
   
//     return (
//         <div style={{ height: '50vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//                 defaultCenter={{ lat: latitude,
//                     lng: longitude }}
//                 defaultZoom={16}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//             >
//             </GoogleMapReact>
//         </div>
//     );
// };

export default GoogleMaps;
   