import React from "react";
import styles from "../styles/Attribution.module.css";

export const Attribution = () => {
  return (
    <div className={`${styles["attribution"]}`}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by{" "}
      <a href="https://www.linkedin.com/in/george-xuan-ming-teo-4383a6160/">
        George Teo
      </a>
      .
    </div>
  );
};
