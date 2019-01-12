import React, { Fragment } from 'react';
import RestaurantPreview from '../components/RestaurantPreview';
import RestaurantShow from '../components/RestaurantShow';
import { connect } from 'react-redux';

function Home({ restaurants, appReducer }) {
  const { currentRestaurant, showDetail } = appReducer;
  const restaurantList = restaurants.map((restaurant, ind) => (
    <RestaurantPreview restaurant={restaurant} key={ind} />
  ))

  return (
    <Fragment>
      <div className="restaurant-preview-list">
        {restaurantList}
      </div>
      {currentRestaurant && <RestaurantShow showDetail={showDetail} restaurant={currentRestaurant} />}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(Home);
