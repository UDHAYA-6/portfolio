import React, { useState, useEffect } from "react";
import classes from "./project.module.css";
import { useSelector } from "react-redux";
import useSWR from "swr";
const Project = () => {
  const [Data, setData] = useState([]);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setData(data[0].Projects);
    }
    if (error) {
      alert("Error while fetching", error);
    }
  }, [data]);

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
            <img alt="image" src="/project.png" className={classes.img} />
            <p className={classes.title}>{item.Title}</p>
            <p className={classes.desc}>{item.Desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
