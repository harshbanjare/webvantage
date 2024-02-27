import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="landing">
        <NavBar />
        <div className="hero">
          <div className="title" data-aos="fade-right">
            Welcome to <span>WebVantage </span>Studios
          </div>
          <div className="sub-section">
            <div className="left" data-aos="fade-right">
              <div className="upper">
                Where creativity meets functionality. We're not just another
                code mill, we make innovative web experiences that stand out!
              </div>
              <div className="lower">
                Creating magic in the world of web development!
              </div>
            </div>
            <div className="right" data-aos="fade-left">
              <img src="./images/hero.png" alt="" />
            </div>
          </div>
        </div>
        <div className="features-container">
          <div className="feature-a">
            <div className="section-a">
              <div className="container" data-aos="flip-right">
                <img src="./images/design.png" alt="" />
                <div className="title">Design</div>
              </div>
              <div
                className="container"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                <img src="./images/develop.png" alt="" />
                <div className="title">Develop</div>
              </div>

              <div
                className="container"
                data-aos="flip-left"
                data-aos-delay="600"
              >
                <img src="./images/deliver.png" alt="" />
                <div className="title">Deliver</div>
              </div>
            </div>

            <div className="section-b" data-aos="fade-up" data-aos-delay="800">
              <p className="content">
                With years of experience in the arena of web development and
                application design, we’ve perfected the craft of delivering
                elegance in simplicity.
              </p>
              <p className="content">
                Our creations don’t just please the eyes but they also awaken
                your brand, setting it miles apart from the competition.
              </p>
            </div>

            <div className="section-c">
  
             
             <a href="/about#team"> <button data-aos="fade-up-right" data-aos-delay="1000">
                Meet Our Team
              </button></a>
            </div>
          </div>
          <div className="feature-b" id="services">
            <div className="box b1" data-aos="fade-down-left">
              <img src="./images/wd.png" alt="Web Development" srcset="" />
              <div className="title">Web Development</div>
              <p></p>
            </div>
            <div
              className="box b2"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              <img src="./images/ad.png" alt="App Development" srcset="" />
              <div className="title">App Development</div>
              <p></p>
            </div>
            <div
              className="box b3"
              data-aos="fade-down-left"
              data-aos-delay="400"
            >
              <img src="./images/pm.png" alt="Product Management" srcset="" />
              <div className="title">Product Management</div>
              <p></p>
            </div>
            <div
              className="box b4"
              data-aos="fade-up-right"
              data-aos-delay="600"
            >
              <img src="./images/smm.png" alt="SEO" srcset="" />
              <div className="title">Social Media Management</div>
              <p></p>
            </div>
          </div>
          <div className="feature-c">
            <div className="title" data-aos="fade-in">
              Unleash Creativity
            </div>
            <div className="section">
              <div className="box" data-aos="fade-down">
                Break beyond the boundaries with our masterful designs and
                innovative solutions. At WebVantage Studios, we breathe life
                into your ideas, transforming them into digital wonders.
              </div>
              <div className="box" data-aos="fade-up">
                Speared by a team of eccentric tech enthusiasts, we deliver
                performances that surpasses your wildest expectations every
                single time. Yes, this isn’t a fairy tale, it’s the real deal.
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-container" data-aos="fade-in">
          <div className="title">What Our Clients Say</div>
          <div
            className="carousel-container"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <CCarousel interval={2500}>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_1.png"
                  alt="slide 1"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_2.png"
                  alt="slide 2"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_3.png"
                  alt="slide 3"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_4.png"
                  alt="slide 3"
                />
              </CCarouselItem>
            </CCarousel>
          </div>

          <div className="brief" data-aos="fade-up" data-aos-delay="300">
            <div className="title">Get Started</div>
            <div className="details">
              Ready to embark on a journey leading to digital excellence?
              Connect with us for a free consultation and let’s unravel the path
              to your brand’s success together.
            </div>
            <a href="/contact">
              <button className="contact-us-button">Contact Us</button>
            </a>
          </div>
        </div>

        <div className="bottom" data-aos="fade-up">
          <div className="bottom-logo-container">
            <img src="./images/logo.png" alt="" srcset="" />
            <div className="subtitle">WebVantagestudios.com</div>
          </div>
          <div className="links-container">
            <div className="links">
              <div className="title">Products</div>
              <div className="subsection">
                <div className="container">
                  <div className="link">Website Templates</div>
                  <div className="link">Website Builder</div>
                  <div className="link">Website Design</div>
                  <div className="link">Wix Features</div>
                  <div className="link">Mobile App Development</div>
                </div>
                <div className="container">
                  <div className="link">App Market</div>
                  <div className="link">Web Hosting</div>
                  <div className="link">Domain Names</div>
                  <div className="link">Website Accessibility</div>
                </div>
              </div>
            </div>
            <div className="links">
              <div className="title">Company</div>
              <div className="link">Site Map</div>
              <div className="link">Domain Names</div>
            </div>
            <div className="links">
              <div className="title">WebVantage Studios</div>
              <div className="link">
                The WebVantage offers a complete solution from enterprise-grade
                digital products and business features to advanced SEO and
                marketing tools enabling anyone to grow online.
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
