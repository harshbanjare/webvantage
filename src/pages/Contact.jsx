import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import Slider from "@mui/material/Slider";
import FooterLight from "../components/FooterLight";

import "../styles/Contact.css";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const Contact = () => {
  const [value, setValue] = React.useState(30000);

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
      secondary: {
        main: grey[300],
      },
    },
  });

  const marks = [
    {
      value: 10000,
      label: "10K",
    },
    {
      value: 100000,
      label: "100K",
    },
  ];
  return (
    <div className="contact">
      <NavBar />
      <div className="intro">
        <div className="content" data-aos="fade-right" data-aos-delay="250">
          <div className="logo_name">
            <span>
              <span>WebVantage</span> Studios
            </span>
          </div>
          <div className="title">Hello Future Partners!</div>
          <div className="desc">
            Get ready to transform your wild and incredible ideas into
            exceptional digital products. Expect our projects to beat your wild
            dreams and rock your world. Don’t sit on that project idea any
            longer -let’s get started.
          </div>
        </div>
        <div className="illustration" data-aos="fade-left" data-aos-delay="450">
          <img src="./images/char 1.png" alt="" srcset="" />
        </div>
      </div>

      <div className="projects">
        <div
          className="illustration"
          data-aos="fade-right"
          data-aos-delay="450"
        >
          <img src="./images/char 2.png" alt="" srcset="" />
        </div>
        <div className="content">
          <div className="title" data-aos="fade-right" data-aos-delay="250">
            Our Projects
          </div>
          <div
            className="project_pic"
            data-aos="fade-left"
            data-aos-delay="650"
          >
            <img src="./images/project_pictures.png" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="form-area">
        <div className="header">
          <div className="title" data-aos="fade-right" data-aos-delay="250">
            <span>Ignite your business </span>
            <br /> Tell us your Idea
          </div>
          <div
            className="illustration"
            data-aos="fade-left"
            data-aos-delay="450"
          >
            <img src="./images/char 3.png" alt="" srcset="" />
          </div>
        </div>

        <div className="form" data-aos="zoom-out-down" data-aos-delay="250">
          <form action="">
            <div className="type">
              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="website"
                  value="website"
                />
                <label for="website">Website</label>
              </div>

              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="application"
                  value="application"
                />
                <label for="application">Application</label>
              </div>

              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="uiux"
                  value="uiux"
                />
                <label for="uiux">UI/UX Design</label>
              </div>

              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="branding"
                  value="branding"
                />
                <label for="branding">Branding</label>
              </div>

              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="maintenance"
                  value="maintenance"
                />
                <label for="maintenance">Maintenance</label>
              </div>
            </div>
            <div className="details">
              <div className="fields">
                <input type="text" placeholder="Your Name" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-Mail"
                />
                <textarea
                  name="about"
                  id="about"
                  placeholder="About Your Project"
                ></textarea>
              </div>
              <div className="illustration">
                <img src="./images/charimage.png" alt="" srcset="" />
              </div>
            </div>
            <hr />
            <div className="info">
              <div className="budget">
                <div className="title">Project budget</div>
                <select name="currency" id="currency">
                  <option value="inr">INR</option>

                  <option value="usd">USD</option>
                </select>
                <div className="slider_container">
                  <ThemeProvider theme={theme}>
                    <Slider
                      aria-label="Budget"
                      defaultValue={30000}
                      getAriaValueText={(value) => `${value}`}
                      valueLabelDisplay="auto"
                      step={10000}
                      marks={marks}
                      min={10000}
                      max={100000}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </ThemeProvider>
                </div>
                <div className="budgetText">
                  <span>
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
                <button>Submit</button>
              </div>
              <div className="attachments">
                <div className="wrapper">
                  <div className="title">Add Attachments</div>
                  <div className="upload">
                    <span>PDF Files Only</span>
                    <br />
                    <label>
                      <input type="file" name="file" id="file" />
                      <span>Select File</span>
                    </label>
                  </div>
                  <button>Upload</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <div className="title" data-aos="fade-left" data-aos-delay="250">
          Our Contact Info
        </div>
        <div className="info-box" data-aos="zoom-in" data-aos-delay="250">
          <div className="details">
            <div className="field">
              <div className="label">Phone no.</div>
              <div className="value"> +91 7004789217 </div>
            </div>
            <div className="field">
              <div className="label">E-Mail</div>
              <div className="value">
                Madhurendra.pratap@webvantagestudios.com
              </div>
            </div>
            <div className="field">
              <div className="label">Address</div>
              <div className="value">
                Ashiana, Jamshedpur, Jharkhand, 831011
              </div>
            </div>
          </div>
          <div className="illustration">
            <img src="./images/char 4.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      <FooterLight />
    </div>
  );
};

export default Contact;
