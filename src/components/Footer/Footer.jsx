import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';
 
export default function Footer() {

    return (
        <>
          <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Kanheri</h3>
          <p>The Kanheri Caves are a group of rock-cut monuments shaped from a single basalt rock in the forests of the Sanjay Gandhi National Park, Mumbai, India.</p>
          <p>Managed by the Archaeological Survey of India, these caves represent one of the most significant Buddhist heritage sites in Western India.</p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#tour">Virtual Tour</a></li>
            <li><a href="#art">Buddhist Art</a></li>
            <li><a href="#visitor">Visitor Info</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Related Sites</h3>
          <ul className="footer-links">
            <li><a href="#">Ajanta Caves</a></li>
            <li><a href="#">Ellora Caves</a></li>
            <li><a href="#">Elephanta Caves</a></li>
            <li><a href="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx">Sanjay Gandhi National Park</a></li>
            <li><a href="https://asi.nic.in/">Archaeological Survey of India</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Archaeological Survey of India</p>
          <p>Mumbai Circle Office</p>
          <p>Email: asi.mumbai@gov.in</p>
          <p>Phone: +91-22-22844089</p>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 Archaeological Survey of India. All Rights Reserved.</p>
      </div>
    </footer>
        </>
    )
}