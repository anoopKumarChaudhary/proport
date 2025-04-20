import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/home.js";
import About from "./components/about.js";
import Skill from "./components/skill.js";
import Hackathons from "./components/hackathons.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage />
      <About />
      <Skill />
      <Hackathons />
    </div>
  );
}
