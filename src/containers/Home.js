import React from 'react';
import RestaurantPreview from '../components/RestaurantPreview';
import RestaurantShow from '../components/RestaurantShow';
import { connect } from 'react-redux';

function Home({ restaurants, appReducer }) {
  const restaurantList = restaurants.map((restaurant, ind) => (
    <RestaurantPreview restaurant={restaurant} key={ind} />
  ))

  return (
    <div className="restaurant-preview-list">
      {!appReducer.currentRestaurant ? restaurantList :  <RestaurantShow />}
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(Home);
