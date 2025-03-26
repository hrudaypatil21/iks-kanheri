import React from "react";
import './Header.css'

const Header = () => {
    return (
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">Kanheri <span>Caves</span></a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/architecture">Architecture</a></li>
            <li><a href="/inscriptions">Inscriptions</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;