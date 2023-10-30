import React from "react";
import classes from "./Status.module.css";

const StatusIndicator = ({ status }) => {
  let statusText, statusColor;

  switch (status) {
    case "loading":
      statusText = "Loading...";
      statusColor = "blue";
      break;
    case "success":
      statusText = "Success";
      statusColor = "green";
      break;
    case "error":
      statusText = "Error";
      statusColor = "red";
      break;
    default:
      statusText = "Unknown Status";
      statusColor = "gray";
  }

  return (
    <div className={classes}>
      <div className={`${classes.status_indicator} ${classes[statusColor]}`}>
        {statusText}
      </div>
    </div>
  );
};

export default StatusIndicator;
