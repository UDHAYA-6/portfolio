import React, { useState, useEffect, useRef } from "react";
import classes from "./education.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Education = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();

      if (response.ok) {
        setData(data[0].Education);
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
    </div>
  );
};

export default Education;
