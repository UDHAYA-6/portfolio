import React, { useState, useEffect } from "react";
import classes from "./education.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Education = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setData(data[0].Education);
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
      <h1>
        Education <FaUserGraduate />
      </h1>
      <div className={classes.paradiv}>
        <p className={classes.para}>{Data}</p>
      </div>
    </motion.div>
  );
};

export default Education;
