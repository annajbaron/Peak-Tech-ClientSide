import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import MapContainer from './maps'

class Directory extends React.Component {
  render() {
    return (
      <div className={this.props.directoryOpen ? "directory-open" : "directory-closed"}>
        <h1>Directory</h1>
        <MapContainer />
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Directory);
