import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './containers/Home';
import './App.css';

class App extends Component {
  render() {
    const { appReducer } = this.props;
    console.log(appReducer);

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(App);
