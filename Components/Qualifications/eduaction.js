import React, { useState, useEffect } from "react";
import classes from "./education.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { useSelector } from "react-redux";
import useSWR from "swr";
const Education = () => {
  const [Data, setData] = useState("");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setData(data[0].Education);
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
