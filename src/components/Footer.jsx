import React from "react";
import "./Footer.css";
import gdscl from "./assets/gdsc1.png";
import synl from "./assets/syn1.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div class="box" id="contact_anchor">
      <footer>
        <hr className="line" />
        <div class="container1">
          <div class="row">
            <div class="col" id="company">
              <h1>Hackniche organized by</h1>
              <div class="logo">
                <img src={gdscl} class="gd" />
                <img
                  src={synl}
                  style={{ height: "120px", marginTop: "10px" }}
                />
              </div>

              <div class="social">
                <a href="https://instagram.com/gdsc.djsce?igshid=YmMyMTA2M2Y=">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://instagram.com/synapse.djsce?igshid=YmMyMTA2M2Y=">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div class="col" id="useful-links">
              <h3>Links</h3>
              <div class="links">
                <Link
                  to="about_anchor"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  to="timeline_anchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Time Line
                </Link>
                <Link
                  to="domain_anchor"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Domains
                </Link>
                <Link
                  to="prizes_anchor"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Prizes
                </Link>
              </div>
            </div>

            <div class="col" id="contact" style={{ marginTop: "33px" }}>
              <h3>Contact</h3>

              <div class="contact-details">
                <i class="fa-regular fa-envelope"></i>
                <a href="mailto:help.hackniche@gmail.com">
                  help.hackniche@gmail.com
                </a>
              </div>
              <div class="contact-details">
                <i class="fa-brands fa-discord"></i>
                <p>
                  <a href="https://discord.gg/cNE4SYSh"> Discord Server </a>
                </p>
              </div>
              <div class="contact-details">
                <i class="fa fa-location"></i>
                <p>
                  {" "}
                  No. U, 15, Bhaktivedanta Swami Rd, <br />
                  opp. Cooper Hospital, Navpada, JVPD Scheme,
                  <br /> Vile Parle, Mumbai, Maharashtra 400056{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="maps"
              src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=dj sangh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <div class="bottom">
          <p className="">Hachniche 2023 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
