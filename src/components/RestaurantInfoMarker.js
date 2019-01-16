import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantToolTip from './RestaurantToolTip';
import { toggleDetail, changeRestaurant } from '../redux/reducers/appReducer';

class RestaurantInfoMarker extends Component {
  state = {
    showInfoMarker: false,
    showToolTip: false,
  }

  toggleShowInfoMarker = () => {
    const { showInfoMarker } = this.state;
    this.setState({ showInfoMarker: !showInfoMarker });
  }

  toggleQuickView = () => {
    this.setState({ showToolTip: !this.state.showToolTip });
  }

  render () {
    const { lat, lng, restaurant, dispatch } = this.props;
    const { showToolTip } = this.state;

    return (
      <div
        lat={lat}
        lng={lng}
        onMouseEnter={this.toggleQuickView}
        onMouseLeave={this.toggleQuickView}
        onClick={() => {
          dispatch(toggleDetail(true));
          dispatch(changeRestaurant(restaurant));
        }}
        className='restaurant-info-marker'
      >
        {showToolTip && <RestaurantToolTip restaurant={restaurant} />}
        <div className="lunchtyme-logo" onClick={this.toggleShowInfoMarker} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(RestaurantInfoMarker);
