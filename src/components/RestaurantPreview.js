import React from 'react';
import { connect } from 'react-redux';
import { changeRestaurant, toggleDetail } from '../redux/reducers/appReducer';

function RestaurantPreview({ restaurant, dispatch }) {
  return (
    <div className="restaurant-preview-container">
      <img
        className="restaurant-image"
        src={restaurant.backgroundImageURL}
        alt={restaurant.name}
      />
      <section className="restaurant-info">
        <h1 className="restaurant-preview-name">{restaurant.name}</h1>
        <h3 className="restaurant-preview-category">{restaurant.category}</h3>
      </section>
      <div
        className="restaurant-preview-gradient"
        onClick={() => {
          dispatch(changeRestaurant(restaurant))
          dispatch(toggleDetail(true))
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(RestaurantPreview);
