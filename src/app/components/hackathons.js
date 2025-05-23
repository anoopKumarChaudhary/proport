"use client";
import React from "react";
import styles from "../styles/hackathon.module.css";
import { motion } from "framer-motion";

const images = [
  "ii10.jpeg",
  "ii3.jpeg",
  "ii5.jpeg",
  "ii6.jpeg",
  "ii7.jpeg",
  "ii8.jpeg",
  "ii9.jpeg",
  "ii2.jpeg",
  "ii11.jpeg",
  "ii12.jpeg",
  "ii13.jpeg",
  "ii14.jpeg",
  "ii15.png",
  "ii16.jpeg",
  "ii17.jpeg",
  "ii10.jpeg",
];

const Hackathons = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p className={styles.head}>HACKATHONS</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.masonryGrid}>
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className={`${styles.masonryItem} ${styles[`item${index % 5}`]}`}
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
