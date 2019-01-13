import React, { Component } from 'react';

class RestaurantInfoMarker extends Component {
  state = {
    showInfoMarker: false,
  }

  toggleShowInfoMarker = () => {
    const { showInfoMarker } = this.state;
    this.setState({ showInfoMarker: !showInfoMarker });
  }
  render () {
    const { lat, lng } = this.props;

    return (
      <div
        lat={lat}
        lng={lng}
        className={`restaurant-info-marker`}
      >
        <div className="lunchtyme-logo" onClick={this.toggleShowInfoMarker} />
      </div>
    )
  }
}

export default RestaurantInfoMarker;
