import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/FooterLight.css";

const FooterLight = () => {
  return (
    <div className="footer" data-aos="fade-up" data-aos-delay="200">
      <div className="socials">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/fb_black.png" alt="" srcset="" />
        </a>

        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/insta_black.png" alt="" srcset="" />
        </a>

        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/linkedin_black.png" alt="" srcset="" />
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

export default FooterLight;
