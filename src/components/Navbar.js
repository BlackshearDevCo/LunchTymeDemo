import React from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../redux/reducers/appReducer';

function Navbar({ appReducer, dispatch }) {
  const { currentPage } = appReducer;

  return (
    <div className="navbar-container">
      <section
        onClick={() => dispatch(changeRoute('lunch'))}
        className={`navbar-item ${currentPage === 'lunch' ? 'active' : ''}`}
      >
        <div className="navbar-icon lunch" />
        <p className="navbar-text">lunch</p>
      </section>

      <section
        onClick={() => dispatch(changeRoute('internets'))}
        className={`navbar-item ${currentPage === 'internets' ? 'active' : ''}`}
      >
        <div className="navbar-icon internets" />
        <p className="navbar-text">internets</p>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({ appReducer: state.appReducer });

export default connect(mapStateToProps)(Navbar)
