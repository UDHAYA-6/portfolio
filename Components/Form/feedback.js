import React from "react";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
      className={
        theme
          ? `${classes.container} ${classes.dark}`
          : `${classes.container} ${classes.light}`
      }
    >
      <p>
        Thank you for taking the time to learn more about me, and I'm excited to
        connect and collaborate with professionals who share my enthusiasm for
        engineering excellence.
      </p>
    </div>
  );
};

export default Feedback;
