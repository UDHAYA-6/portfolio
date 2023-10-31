import React, { useState, useEffect } from "react";
import classes from "./intern.module.css";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Internship = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setData(data[0].Internship);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, [Data]);

  const theme = useSelector((state) => state.theme.themedark);
  return (
    <motion.div
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
        <p className={classes.para}>{Data}</p>
      </div>
      <div className={classes.idp}>
        <img src="/idp.png" className={classes.idp1} />
      </div>
    </motion.div>
  );
};

export default Internship;
