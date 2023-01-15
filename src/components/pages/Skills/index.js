import React from "react";
import Styles from "./style.module.css";
const Skills = () => {
  return (
    <div>
      <div className={Styles.Container}>
        <h1>
          Skills&<span>Abilities</span>
        </h1>
        <div className={Styles.Logo}>
          <div className={Styles.react}>
            <span className={Styles.reactlogo}>
              <span className={Styles.nucleo}></span>
            </span>
          </div>

          <div className={Styles.js}>
            <h1>J</h1>
            <h1>S</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
