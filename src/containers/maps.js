
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
      <div className="MapContainer">
      <Map
        style={{width: '50%', height: '50%'}}
        google={this.props.google}
        initialCenter={{
            lat: 49.2819605, lng: -123.1086604
          }}
        zoom={14}
        >
        {/* <Marker /> */}
        <Marker
          name={'Code Core'}
          position={{lat: 49.2819605, lng: -123.1086604}} />
        <Marker
          name={'Code Core'}
          position={{lat: 49.26382, lng: -123.104321}} />


        </Map>
      </div>
      );
    }
  }


const WrappedContainer = (GoogleApiWrapper({
    apiKey: "AIzaSyCHgbwaK-pbR1UPZGuXge3dhwQTSYCVzv0"
  })(MapContainer))

  export default WrappedContainer
