import React from "react";
import classes from "./education.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { useSelector } from "react-redux";
const Education = () => {
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
        <p className={classes.para}>
          I am currently pursuing my Bachelor's Degree in Engineering at Vel
          Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College.
          Throughout my academic journey, I have consistently demonstrated a
          commitment to excellence and a deep interest in programming and
          problem solving.
        </p>
      </div>
    </div>
  );
};

export default Education;
