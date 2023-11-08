import React, { useState, useEffect } from "react";
import classes from "./education.module.css";
import { useSelector } from "react-redux";
import { SkeletonLoading } from "../Page Loader/skeleton";
const Education = () => {
  const [load, setLoad] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function myfunc() {
      setLoad(true);
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        const dt = data[0].Content;
        setData(dt);
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
    <div
      className={
        theme
          ? `${classes.div} ${classes.dark}`
          : `${classes.div} ${classes.light}`
      }
    >
      {load && <SkeletonLoading />}
      {Data && (
        <>
          {Data.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? `${classes.zigzagItem} ${classes.left}`
                  : `${classes.zigzagItem} ${classes.right}`
              }
            >
              <h1>{Object.keys(item)}</h1>
              <div className={classes.paradiv}>
                <p className={classes.para}>{Object.values(item)}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Education;
