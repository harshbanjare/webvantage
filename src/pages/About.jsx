import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import FooterLight from "../components/FooterLight";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <NavBar />
        <div className="hero">
          <div className="content" data-aos="fade-right" data-aos-delay="250">
            <div className="_name">
              <span>
                <span>WebVantage</span> Studios
              </span>
            </div>
            <div className="_title">
              Craft <br />
              your <br />
              digital dreams
            </div>
            <div className="_cta">
              <button>Know More</button>
            </div>
          </div>

          <div
            className="illustration"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <img src="./images/illustration_1.png" alt="" srcset="" />
          </div>
        </div>

        <div className="about_us">
          <div className="content" data-aos="fade-left" data-aos-delay="300">
            <div className="heading">
              <span>About Us</span>
            </div>
            <div className="title">
              We’re a bunch <br /> of digital maestros <br /> dancing on the{" "}
              <br />
              keyboard to <br /> co-create your next masterpiece.
            </div>
          </div>
          <div
            className="illustration"
            data-aos="fade-left"
            data-aos-delay="450"
          >
            <img src="./images/illustration_2.png" alt="" srcset="" />
          </div>
        </div>

        <div className="team">
          <div className="heading" data-aos="fade-down" data-aos-delay="200">
            Our Wizards
          </div>
          <div
            className="sub-heading"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Meet the masterminds pulling the strings behind te digital curtain
          </div>
          <div className="team-cards">
            <div
              className="card card_a"
              data-aos="fade-down-right"
              data-aos-delay="450"
            >
              <img src="./images/team_1.png" alt="" srcset="" />
              <span>MADHURENDRA PRATAP</span>
              <span>Founder</span>
            </div>
            <div
              className="card card_b"
              data-aos="fade-down"
              data-aos-delay="550"
            >
              <img src="./images/team_2.png" alt="" srcset="" />
              <span>RAMACHANDRAN VENKAT RAMNA</span>
              <span>Co-Founder</span>
            </div>
            <div
              className="card card_c"
              data-aos="fade-down-left"
              data-aos-delay="650"
            >
              <img src="./images/team_3.png" alt="" srcset="" />
              <span>RITOBAAN ROY</span>
              <span>COO</span>
            </div>
            <div
              className="card card_c"
              data-aos="fade-up-right"
              data-aos-delay="750"
            >
              <img src="./images/team_4.png" alt="" srcset="" />
              <span>Name</span>
              <span>Designation</span>
            </div>

            <div
              className="card card_b"
              data-aos="fade-up"
              data-aos-delay="850"
            >
              <img src="./images/team_5.png" alt="" srcset="" />
              <span>Name</span>
              <span>Designation</span>
            </div>

            <div
              className="card card_d"
              data-aos="fade-up-left"
              data-aos-delay="950"
            >
              <img src="./images/team_6.png" alt="" srcset="" />
              <span>Name</span>
              <span>Designation</span>
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="blog" data-aos="fade-right" data-aos-delay="200">
            <div className="image">
              <img src="./images/image_1.png" alt="" srcset="" />
            </div>
            <div className="content">
              <div className="title">
                Mining The Digital Realm For Unpolished Gems
              </div>
              <div className="sub">
                Meticulous designs, crafted coding and captivating content – we
                do it all to shape your dreams into realities.
              </div>
            </div>
          </div>

          <div className="blog" data-aos="fade-left" data-aos-delay="400">
            <div className="content">
              <div className="title">
                In The Business Of Weaving Web Wonders
              </div>
              <div className="sub">
                Responsive websites, awesome applications – all leveraged with
                some technical wizardry and out of the box thinking.
              </div>
            </div>
            <div className="image">
              <img src="./images/image_2.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        <div className="sub-footer" data-aos="fade-up" data-aos-delay="400">
          <h1>Get Started</h1>
          <hr />
          <p>
            Why wait for the future when you can create it? <br /> Let’s get
            started with your scintillating success story!
          </p>

          <div className="button-container">
            <button>Join Us</button>
            <a href="/contact">
              <button className="contact-us-btn">Contact Us </button>
            </a>
          </div>
        </div>
      </div>
      <FooterLight />
    </>
  );
};

export default About;
