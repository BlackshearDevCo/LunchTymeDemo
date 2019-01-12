import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import RestaurantInfoMarker from './RestaurantInfoMarker';

class RestaurantShow extends Component {
  state = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 13,
  }

  componentDidMount() {
    const { currentRestaurant } = this.props.appReducer;

    this.setState({
      center: {
        lat: currentRestaurant.location.lat,
        lng: currentRestaurant.location.lng,
      }
    })
  }

  render() {
    const { currentRestaurant } = this.props.appReducer;

    return (
      <div className="restaurant-content-container">
        <div className="map-placeholder">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            <RestaurantInfoMarker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
            />
          </GoogleMapReact>
        </div>
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
