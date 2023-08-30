import React from 'react';
import '../cssfiles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are a leading software company...</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Connect With Us</h2>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>&copy; 2023 Your Software Company. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
