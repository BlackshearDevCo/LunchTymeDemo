import React from 'react';
import RestaurantPreview from '../components/RestaurantPreview';
import { connect } from 'react-redux';

function Home({ restaurants }) {
  const restaurantList = restaurants.map(restaurant => (
    <RestaurantPreview restaurant={restaurant} />
  ))

  return (
    <div className="restaurant-preview-list">
      {restaurantList}
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
});

export default connect(mapStateToProps)(Home);
