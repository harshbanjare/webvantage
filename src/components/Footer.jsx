import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/fb.png" alt="" srcset="" />
        </a>

        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/insta.png" alt="" srcset="" />
        </a>

        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/linkedin.png" alt="" srcset="" />
        </a>
      </div>
      <div className="copy">
        <div className="copy-text">
          © 2024 WebVantage Studios. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
