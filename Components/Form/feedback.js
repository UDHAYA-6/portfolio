import React, { useEffect, useState } from "react";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = (props) => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();

      if (response.ok) {
        setData(data[0].Feedback);
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
          ? `${classes.container} ${classes.dark}`
          : `${classes.container} ${classes.light}`
      }
    >
      <p>{props.Foot}</p>
    </div>
  );
};

export async function getStaticProps() {}
export default Feedback;
