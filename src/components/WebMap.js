import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import RestaurantInfoMarker from './RestaurantInfoMarker';
import { toggleDetail } from '../redux/reducers/appReducer';

function WebMap({ restaurantsReducer, showFullMap, showDetail, dispatch }) {
  const getMapCenter = () => {
    let sumOfLat = 0;
    let sumOfLng = 0;
    restaurantsReducer.forEach(restaurant => {
      sumOfLat += restaurant.location.lat;
      sumOfLng += restaurant.location.lng;
    });
    return {
      lat: sumOfLat / restaurantsReducer.length,
      lng: sumOfLng / restaurantsReducer.length,
    }
  }

  return (
    <div className={`web-map ${showFullMap ? 'active' : ''}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={restaurantsReducer[0] ? getMapCenter() : { lat: 0, lng: 0 }}
        zoom={13}
      >
        {restaurantsReducer.map((restaurant, ind) => (
          <RestaurantInfoMarker
            key={ind}
            lat={restaurant.location.lat}
            lng={restaurant.location.lng}
          />
        ))}
      </GoogleMapReact>
      {showDetail && (
        <div
          className={`map-overlay ${showDetail ? 'active' : ''}`}
          onClick={() => dispatch(toggleDetail(false))}
        />
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  restaurantsReducer: state.restaurantsReducer,
});

export default connect(mapStateToProps)(WebMap);
