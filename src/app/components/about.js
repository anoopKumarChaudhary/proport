import React from "react";
import styles from "../styles/about.module.css";
import CircularProgress from "./prog";

export default function About() {
  const text1 = `I'm a passionate software developer who thrives on turning ideas into elegant, efficient code. With an insatiable love for coding, I spend my time 
  building software solutions, sharpening my skills through competitive programming, and constantly pushing the boundaries of what I can create.
I enjoy solving real-world problems through code, whether it’s architecting scalable web applications, writing clean APIs, or optimizing algorithms for performance.
My curiosity drives me to explore new technologies, learn from challenges, and continuously improve—not just as a developer, but as a thinker and creator.
Outside of building projects, you’ll find me diving deep into algorithmic puzzles, data structures, and coding contests. Platforms like Codeforces, LeetCode,
 and AtCoder are my playgrounds where I challenge myself to think faster and code smarter.
I believe great software is not just about writing code—it's about writing the right code with purpose,
clarity, and care. Whether I’m working solo or collaborating with a team, I bring energy, focus, and a love for solving tough problems.
Always learning. Always building. Always coding.`;
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p className={styles.head}>ABOUT ME</p>
        <div className={styles.line}></div>
      </div>
      <p className={styles.p1}>{text1}</p>
      <div className={styles.title1}>
        <p className={styles.head}>WHAT I DO</p>
      </div>
      <p className={styles.p2}>{text1}</p>
    </div>
  );
}
