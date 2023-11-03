import React, { useState, useEffect } from "react";
import classes from "./intern.module.css";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Internship = (props) => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
      initial={{ y: 120, opacity: 1 }}
      animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      className={
        theme
          ? `${classes.div} ${classes.dark}`
          : `${classes.div} ${classes.light}`
      }
    >
      <div className={classes.paradiv}>
        <h1>
          Professional Experience <FaBriefcase />
        </h1>
        <p className={classes.para}>{props.Int}</p>
      </div>
      <div className={classes.idp}>
        <img src="/idp.png" className={classes.idp1} />
      </div>
    </div>
  );
};

export default Internship;
