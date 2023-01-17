import React from "react";
import { Wave } from "react-animated-text";
import { skillsData } from "../../data/skills";
import Styles from "./style.module.css";
import Particle from "../../../Particle";
const Skills = () => {
  return (
    <div>
      <div className={Styles.Container} id="skills">
        <Particle />
        <h1>
          <Wave text="SKILLS & ABILITIES" />
        </h1>
        <div className={Styles.Logo}>
          {skillsData.map((x, index) => {
            return (
              <div key={index} className={Styles.box}>
                <img src={x.image} alt="" className={Styles.image} />
                <h2 className={Styles.name}>{x.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
