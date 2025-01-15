// import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
const NavBar = ({ style }) => {
  return (
    <nav className="navbar" style={style}>
      <div className="container">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyTBgaGNOSvOI0" alt="Menu" className="menu-icon" />
        <div className="logo">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyTBgaGNOSvOI1" alt="Logo" className="logomark" />
          <span className="brand-text">DoIt</span>
        </div>
      </div>
      
      <div className="header-icons">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyTBgaGNOSvOI2" alt="Search" className="header-icon" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyTBgaGNOSvOI3" alt="Apps" className="header-icon" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyTBgaGNOSvOI4" alt="Theme" className="header-icon" />
      </div>
      
      <div className="divider"></div>
    </nav>
  );
};

NavBar.propTypes = {
    style: PropTypes.object, // Define the prop type as an object
};

NavBar.defaultProps = {
  style: {
    width: '100%',
    height: '56px',
    minWidth: '768px'
  }
};

export default NavBar;

