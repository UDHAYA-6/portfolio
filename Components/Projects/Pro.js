import React, { useState, useEffect } from "react";
import classes from "./project.module.css";
import { useSelector } from "react-redux";
import { ProjectLoader } from "../Page Loader/skeleton";
const Project = () => {
  const [load, setLoad] = useState(true);
  const [Pro, setPro] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function myfunc() {
      setLoad(true);
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        setPro(data[0]);
        setData(data[0].Projects);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
      setLoad(false);
    }
    myfunc();
  }, []);
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <>
      <center>
        <h1 className={theme ? `${classes.darkhead}` : `${classes.lighthead}`}>
          {load && <ProjectLoader />}
          {Object.keys(Pro)[1]}
        </h1>
      </center>

      <div className={classes.project}>
        {data.map((item, index) => (
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
