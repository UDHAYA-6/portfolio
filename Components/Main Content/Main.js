import classes from "./Main.module.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import MovingDiv from "../MovingDiv";
const Main = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setData(data[0].About_me);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, [Data]);

  const theme = useSelector((state) => state.theme.themedark);

  return (
    <div
      className={
        theme
          ? `${classes.mains} ${classes.dark}`
          : `${classes.mains} ${classes.light}`
      }
    >
      <motion.div
        className={classes.content}
        initial={{ y: 120, opacity: 1 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      >
        <div className={classes.image}>
          <img alt="Profile picture" src="/udhay.jpg" />
          <div>
            <ul>
              <motion.li initial={{ x: 120, y: 60 }} animate={{ x: 0, y: 0 }}>
                <a
                  href="https://www.linkedin.com/in/udhaya-kumar-developer/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: 120, y: 60 }}
                animate={{ x: 0, y: 0 }}
                className={classes.twitter}
              >
                <a href="mailto:udhaya642003@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -120, y: -60 }}
                animate={{ x: 0, y: 0 }}
                className={classes.github}
              >
                <a href="https://github.com/UDHAYA-6" target="_blank">
                  <FaGithub />
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -120, y: -60 }}
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

        <div className={classes.body}>
          <div>
            <h3 className={classes.hello}>Hello!</h3>
            <p className={classes.first}>I'm Udhaya Kumar,</p>
            {Data}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
