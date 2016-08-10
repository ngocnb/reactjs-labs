import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO: authentication
  }
}

export default connect(null, mapDispatchToProps)(App);