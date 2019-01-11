import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantShow extends Component {
  render() {
    const { appReducer } = this.props;
    const { currentRestaurant } = appReducer;

    return (
      <div className="restaurant-content-container">
        <div className="map-placeholder" />
        <section className="restaurant-info-stripe">
          <h1 className="restaurant-title">{currentRestaurant.name}</h1>
          <h3 className="restaurant-category">{currentRestaurant.category}</h3>
        </section>

        <section className="restaurant-detail-container">
          <p>
            {currentRestaurant.location.address}
            <br />
            {currentRestaurant.location.formattedAddress[1]}
          </p>
          <p>{currentRestaurant.contact.formattedPhone}</p>
          <p>@{currentRestaurant.contact.twitter}</p>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({ appReducer: state.appReducer })

export default connect(mapStateToProps)(RestaurantShow);
