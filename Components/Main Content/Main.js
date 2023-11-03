import classes from "./Main.module.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
const Main = (props) => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
      className={
        theme
          ? `${classes.mains} ${classes.dark}`
          : `${classes.mains} ${classes.light}`
      }
    >
      <div className={classes.content}>
        <div className={classes.image}>
          <motion.img
            initial={{ scale: 0.2 }}
            animate={{ rotateZ: 360, scale: 1 }}
            transition={{ duration: 2, type: "spring", bounce: 0.6 }}
            alt="Profile picture"
            src="/udhay-min.jpg"
          />
          <div>
            <ul>
              <motion.li initial={{ x: 120 }} animate={{ x: 0, y: 0 }}>
                <a
                  href="https://www.linkedin.com/in/udhaya-kumar-developer/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: 120 }}
                animate={{ x: 0, y: 0 }}
                className={classes.twitter}
              >
                <a href="mailto:udhaya642003@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -120 }}
                animate={{ x: 0, y: 0 }}
                className={classes.github}
              >
                <a href="https://github.com/UDHAYA-6" target="_blank">
                  <FaGithub />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -120 }}
                animate={{ x: 0, y: 0 }}
                className={classes.discord}
              >
                <a
                  href="https://instagram.com/udhay_kumar_official?igshidOGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className={classes.scrolling_words_container}>
          <div className={classes.scrolling_words_box}>
            <ul>
              <li style={{ color: "green" }}>Dream</li>
              <li style={{ color: "teal" }}>Believe</li>
              <li style={{ color: "maroon" }}>Achieve</li>
            </ul>
          </div>
          <div style={{ color: "white" }}>it!</div>
        </div>
        <div className={classes.body}>
          <div>
            <p className={classes.first}>Udhaya Kumar</p>
            {props.about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
