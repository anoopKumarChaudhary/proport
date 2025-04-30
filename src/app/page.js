import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/home.js";
import About from "./components/about.js";
import Skill from "./components/skill.js";
import Hackathons from "./components/hackathons.js";
import Service from "./components/service.js";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage />
      <About />
      <Skill />
      <Hackathons />
      <Service />
      <Footer />
    </div>
  );
}
