import React from "react";
import Style from "./style.module.css";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
// import { loadBigSquaresPreset } from "tsparticles-preset-big-squares";
// import { loadBigPolygonsPreset } from "tsparticles-preset-big-polygons";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadTrianglesPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className={Style.Container}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#fff",
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },
          particles: {
            move: {
              direction: "inside",
              speed: 5,
              outModes: {
                default: "destroy",
                bottom: "none",
              },
            },
            rotate: {
              enable: true,
              direction: "random",
              animation: {
                enable: true,
                speed: 4,
              },
            },
            shape: {
              type: ["circle", "square", "triangle", "polygon"],
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
                {
                  sides: 8,
                },
              ],
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 20,
              random: {
                enable: true,
                minimumValue: 10,
              },
            },
          },
          emitters: {
            direction: "none",
            size: {
              width: 100,
              height: 100,
            },
            position: {
              x: 50,
              y: 50,
            },
            rate: {
              quantity: 5,
              delay: 0.3,
            },
          },
          preset: "bigTriangles",
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />

      <div className={Style.HeroItem}>
        <div>
          <h1>Hello My name is Otgonchimeg</h1>
          <h1>
            I am the{" "}
            <span style={{ color: "#ababab" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={Style.Icons}>
            <SocialIcon network="twitter" />
            <SocialIcon network="google" />
            <SocialIcon network="instagram" />
            <SocialIcon network="youtube" />
            <SocialIcon network="facebook" />
          </div>
        </div>
      </div>
      <div className={Style.HeroItem}>
        <div className={Style.ImgContainer}>
          <img src="./images/alenamadeleine.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
