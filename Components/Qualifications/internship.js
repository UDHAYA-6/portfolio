import React, { useState, useEffect } from "react";
import classes from "./intern.module.css";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import useSWR from "swr";
const Internship = () => {
  const [Data, setData] = useState("");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setData(data[0].Internship);
    }
    if (error) {
      alert("Error while fetching", error);
    }
  }, [data]);

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
        <p className={classes.para}>{Data}</p>
      </div>
      <div className={classes.idp}>
        <img src="/idp.png" className={classes.idp1} />
      </div>
    </div>
  );
};

export default Internship;
