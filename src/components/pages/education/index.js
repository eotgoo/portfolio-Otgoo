import React from "react";
import Styles from "./style.module.css";
import { Wave } from "react-animated-text";
const Eductaion = () => {
  return (
    <div>
      <div className={Styles.Container}>
        <h1>
          <Wave text="EDUCATION" />
        </h1>
        <div className={Styles.box}>
          <img src="./images/pinecone.jpg" alt="" />
          <div className={Styles.text}>
            <h1>Pinecone Academy</h1>
            <h2>
              FULL STACK<span> Web development</span>
            </h2>
            <p>2022-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eductaion;
