import React, { useState, useEffect } from "react";
import classes from "./project.module.css";
import { useSelector } from "react-redux";
const Project = (Props) => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <>
      <center>
        <h1 className={theme ? `${classes.darkhead}` : `${classes.lighthead}`}>
          Projects
        </h1>
      </center>
      <div className={classes.project}>
        {Props.Pro.map((item, index) => (
          <div
            key={index + 1}
            className={
              theme
                ? `${classes.item} ${classes.dark}`
                : `${classes.item} ${classes.light}`
            }
          >
            <img alt="image" src="/project-min.png" className={classes.img} />
            <p className={classes.title}>{item.Title}</p>
            <p className={classes.desc}>{item.Desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
