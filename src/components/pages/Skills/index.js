import React from "react";
import { skillsData } from "../../data/skills";
import Styles from "./style.module.css";
const Skills = () => {
  return (
    <div>
      <div className={Styles.Container}>
        <h1>
          Skills&<span>Abilities</span>
        </h1>
        <div className={Styles.Logo}>
          {skillsData.map((x, index) => {
            return (
              <div key={index}>
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
