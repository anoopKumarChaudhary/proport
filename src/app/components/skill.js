import React from "react";
import styles from "../styles/skill.module.css";
import CircularProgress from "./prog.js";

export default function Skill() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p className={styles.head}>SKILLS</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.skills}>
        <CircularProgress label="Flutter" percentage="100" />
        <CircularProgress label="NodeJs" percentage="100" />
        <CircularProgress label="NextJs" percentage="100" />
        <CircularProgress label="AI" percentage="90" />
        <CircularProgress label="Redux" percentage="95" />
        <CircularProgress label="ML & DL" percentage="90" />
        <CircularProgress label="Express" percentage="95" />
        <CircularProgress label="Spring" percentage="70" />
        <CircularProgress label="ReactJs" percentage="90" />
        <CircularProgress label="TensorFlow" percentage="80" />
        <CircularProgress label="RestAPI" percentage="90" />
        <CircularProgress label="DSA" percentage="90" />
        <CircularProgress label="SQL" percentage="80" />
        <CircularProgress label="Keras" percentage="70" />
        <CircularProgress label="Scipy" percentage="65" />
        <CircularProgress label="MongoDB" percentage="90" />
        <CircularProgress label="Firebase" percentage="70" />
        <CircularProgress label="Git" percentage="80" />
        <CircularProgress label="UI" percentage="100" />
        <CircularProgress label="Java" percentage="100" />
        <CircularProgress label="C++" percentage="85" />
        <CircularProgress label="Dart" percentage="80" />
        <CircularProgress label="Javascript" percentage="80" />
        <CircularProgress label="Python" percentage="75" />
        <CircularProgress label="Typescript" percentage="70" />
        <CircularProgress label="Kotlin" percentage="60" />
        <CircularProgress label="Rust" percentage="60" />
      </div>
    </div>
  );
}
