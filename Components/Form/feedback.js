import React, { useEffect, useState } from "react";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setData(data[0].Feedback);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, [Data]);

  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
      className={
        theme
          ? `${classes.container} ${classes.dark}`
          : `${classes.container} ${classes.light}`
      }
    >
      <p>{Data}</p>
    </div>
  );
};

export default Feedback;
