import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import RestaurantPreview from '../components/RestaurantPreview';
import RestaurantShow from '../components/RestaurantShow';
import WebMap from '../components/WebMap';

function Home({ restaurants, appReducer }) {
  const { currentRestaurant, showDetail, showFullMap, mapToggled } = appReducer;
  const restaurantList = restaurants.map((restaurant, ind) => (
    <RestaurantPreview restaurant={restaurant} key={ind} />
  ))

  return (
    <Fragment>
      <div className="restaurant-preview-list">
        {restaurantList}
      </div>
      {currentRestaurant && <RestaurantShow showDetail={showDetail} restaurant={currentRestaurant} />}
      {((showFullMap && restaurants[0]) || mapToggled) && <WebMap showFullMap={showFullMap} />}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(Home);
