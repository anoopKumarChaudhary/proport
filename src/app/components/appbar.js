import React from "react";
import styles from "../styles/appbar.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Appbar() {
  return (
    <div className={styles.main}>
      <p className={styles.head}>anoop kumar chaudhary</p>
      <div className={styles.icons}>
        <FaInstagram className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
    </div>
  );
}
