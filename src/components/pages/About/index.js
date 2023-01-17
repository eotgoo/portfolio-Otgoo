import React from "react";
import Styles from "./style.module.css";
import { Wave } from "react-animated-text";
import Particle from "../../../Particle";
const About = () => {
  return (
    <div className={Styles.aboutMain} id="about">
      <Particle />
      <div className={Styles.aboutTitle}>
        <h1>
          {" "}
          <Wave text="ABOUT ME" />
        </h1>
      </div>
      <div className={Styles.aboutContent}>
        <div className={Styles.aboutImage}>
          <img src="./images/aboutImage.jpg" alt="" />
        </div>
        <div className={Styles.aboutItem}>
          <h2>I'm Otgoo</h2>
          <p> Mmmm..., trying my best.</p>
          <div className={Styles.abtbox}>
            <div className={Styles.abtText}>
              <p>
                Age: <span>19</span>
              </p>
              <p>
                Email: <span>ekotgoo@gmail.com</span>
              </p>
            </div>
            <div className={Styles.abtText}>
              <p>
                Phone: <span>+976 96750533</span>
              </p>
              <p>
                Place: <span>u know haha</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
