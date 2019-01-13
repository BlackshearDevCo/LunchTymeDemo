import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Internets from './containers/Internets';
import { getRestaurants } from './redux/reducers/restaurantsReducer';

import './App.css';
import './styles/css/main.css';
import './styles/css/header.css';
import './styles/css/navbar.css';
import './styles/css/restaurant_preview.css';
import './styles/css/restaurant_show.css';
import './styles/css/restaurant_info_marker.css';
import './styles/css/web_map.css';

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
          {appReducer.currentPage === 'lunch' ? <Home /> : <Internets />}
        </section>
        <Navbar />
      </div>
    );
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(App);
