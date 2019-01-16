import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import RestaurantPreview from '../components/RestaurantPreview';
import RestaurantShow from '../components/RestaurantShow';
import WebMap from '../components/WebMap';

function Home({ restaurants, appReducer }) {
  const { currentRestaurant, showDetail, showFullMap } = appReducer;
  const restaurantList = restaurants.map((restaurant, ind) => (
    <RestaurantPreview restaurant={restaurant} key={ind} />
  ))

  return (
    <Fragment>
      <div className="restaurant-preview-list">
        {restaurantList}
      </div>
      <RestaurantShow showDetail={showDetail} restaurant={currentRestaurant} />
      {restaurants[0] && (
        <WebMap
          showFullMap={showFullMap}
          showDetail={showDetail}
        />
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(Home);
