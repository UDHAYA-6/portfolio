import React from "react";
import classes from "./intern.module.css";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
const Internship = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
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
        <p className={classes.para}>
          I am delighted to have been granted an internship with IDP, a
          well-known industry leader in IELTS. This one-year internship will run
          concurrently with my final year of study and will serve as the ideal
          link between academics and the professional world. I am eager to learn
          from IDP's outstanding employees, apply my theoretical knowledge to
          real-world issues, and contribute to the company's success.
        </p>
      </div>
      <div className={classes.idp}>
        <img src="/idp.png" className={classes.idp} />
      </div>
    </div>
  );
};

export default Internship;
