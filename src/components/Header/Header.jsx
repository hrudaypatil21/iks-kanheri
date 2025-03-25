import React from "react";
import './Header.css'

const Header = () => {
    return (
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">Kanheri <span>Caves</span></a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#tour">Virtual Tour</a></li>
            <li><a href="#art">Buddhist Art</a></li>
            <li><a href="#visitor">Visitor Info</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;