import React from "react";
import Style from "./style.module.css";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import Particle from "../../../Particle";

const Hero = () => {
  return (
    <div className={Style.Container}>
      <Particle />
      <div className={Style.HeroItem} id="home">
        <div>
          <h1>
            Hello, My name is <span>Otgonchimeg</span>
          </h1>
          <h2>
            I am the{" "}
            <span style={{ color: "#ababab" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h2>
          <div className={Style.Icons}>
            <SocialIcon network="instagram" url="https://www.instagram.com/" />
            <SocialIcon
              network="youtube"
              url="https://www.youtube.com/watch?v=IJNR2EpS0jw"
            />
            <SocialIcon network="facebook" url="https://www.facebook.com/" />
            <SocialIcon network="github" url="https://github.com/eotgoo" />
          </div>
        </div>
      </div>
      <div className={Style.HeroItem}>
        <div className={Style.ImgContainer}>
          <img src="./images/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
