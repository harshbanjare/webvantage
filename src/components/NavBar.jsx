import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "../styles/Nav.css";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  const [mobileNavState, setMobileNavState] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="nav-container" data-aos="fade-down">
      <div className="logo">
        <a href="/">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <div className="logo-name">
          <h1>WebVantage Studio</h1>
          <p>Concept To Code</p>
        </div>
      </div>
      <div className="menu-button">
        <button onClick={() => setMobileNavState(!mobileNavState)}>
          {mobileNavState ? <IoCloseOutline /> : <IoMenuSharp />}
        </button>
      </div>
      <div className={mobileNavState ? "menu open" : "menu"}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="nav-button-container">
          <button className="nav-button">Our Blog</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
