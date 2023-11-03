import React, { useState, useEffect } from "react";
import classes from "./project.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Project = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();

      if (response.ok) {
        setData(data[0].Projects);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, []);
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <>
      <center>
        <h1 className={theme ? `${classes.darkhead}` : `${classes.lighthead}`}>
          Projects
        </h1>
      </center>
      <div className={classes.project}>
        {Data.map((item, index) => (
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
