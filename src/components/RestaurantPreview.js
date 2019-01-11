import React from 'react';

export default function RestaurantPreview({ restaurant }) {
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
      <div className="restaurant-preview-gradient" />
    </div>
  )
}
