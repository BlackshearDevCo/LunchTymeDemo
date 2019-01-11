import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './containers/Home';
import { getRestaurants } from './redux/reducers/restaurantsReducer';

import './App.css';
import './styles/css/main.css';
import './styles/css/header.css';
import './styles/css/restaurant_preview.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRestaurants());
  }

  render() {
    const { appReducer } = this.props;

    return (
      <div className="App">
        <Header />
        <section className="content-container">
          <Home />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(App);
