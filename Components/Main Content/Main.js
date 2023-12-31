import classes from "./Main.module.css";
import { motion } from "framer-motion";
import React, { useState, useEffect, use } from "react";
import { useSelector } from "react-redux";
import { AboutLoad } from "../Page Loader/skeleton";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
const Main = () => {
  const [Data, setData] = useState("");
  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        const dt = data[0];
        setData(dt.About_me);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }

    myfunc();
  }, []);
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
            {Data}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
