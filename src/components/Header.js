import React from 'react';
import map_icon from '../images/icon_map@2x.png';
import web_back from '../images/ic_webBack@2x.png';
import web_forward from '../images/ic_webForward@2x.png';
import web_refresh from '../images/ic_webRefresh@2x.png';

export default function Header() {
  return (
    <div className="header-container">
      <section className="web-page-actions">
        <img className="web-back-icon" src={web_back} alt="map-icon" />
        <img className="web-refresh-icon" src={web_refresh} alt="map-icon" />
        <img className="web-forward-icon" src={web_forward} alt="map-icon" />
      </section>
      <h1 className="header-title">Lunch Tyme</h1>
      <img className="map-icon" src={map_icon} alt="map-icon" />
    </div>
  )
}
