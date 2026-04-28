import React from "react";
import Dogs from "../Assets/dogs-footer.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Dogs} alt="Dogs - Footer" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
