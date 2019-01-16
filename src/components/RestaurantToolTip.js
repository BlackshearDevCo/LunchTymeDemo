import React from 'react';

function RestaurantToolTip({ restaurant }) {
  return (
    <div
      className="tool-tip-container"
      style={{ backgroundImage: `url(${restaurant.backgroundImageURL})` }}
    >
      <div className="restaurant-preview-gradient" />
      <section className="tool-tip-content">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.category}</p>
      </section>
    </div>
  )
}

export default RestaurantToolTip;
