import React from "react";
import Style from "./style.module.css";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadBigCirclesPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className={Style.Container}>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          backgroundMode: {
            enable: true,
            zIndex: 10,
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
            number: {
              value: 20,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: [
                "#3998D0",
                "#2EB6AF",
                "#A9BD33",
                "#FEC73B",
                "#F89930",
                "#F45623",
                "#D62E32",
                "#EB586E",
                "#9952CF",
              ],
            },
            destroy: {
              mode: "split",
              split: {
                count: 1,
                factor: {
                  value: 9,
                  random: {
                    enable: true,
                    minimumValue: 4,
                  },
                },
                rate: {
                  value: 10,
                  random: {
                    enable: true,
                    minimumValue: 5,
                  },
                },
                particles: {
                  collisions: {
                    enable: false,
                  },
                  destroy: {
                    mode: "none",
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: 1,
                    },
                  },
                },
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                sides: 5,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 15,
              random: {
                enable: true,
                minimumValue: 10,
              },
              animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
              },
            },
            lineLinked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
              mode: "destroy",
            },
            move: {
              enable: true,
              speed: 7,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 500,
                rotateY: 1000,
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 30,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 1,
              },
              remove: {
                particles_nb: 1,
              },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />

      <div className={Style.HeroItem} id="#home">
        <div>
          <h1>
            I am the{" "}
            <span style={{ color: "#ababab" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h2>
          <div className={Style.Icons}>
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/otgnchmge/"
            />
            <SocialIcon
              network="youtube"
              url="https://www.youtube.com/watch?v=IJNR2EpS0jw"
            />
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/people/13-%D0%B4%D0%B0%D1%85%D1%8C-%D1%85%D0%B0%D1%8F%D0%B3%D0%B3%D2%AF%D0%B9-%D0%B8%D0%BB-%D0%B7%D0%B0%D1%85%D0%B8%D0%B4%D0%B0%D0%BB/100063945570087/?mibextid=LQQJ4d"
            />
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
