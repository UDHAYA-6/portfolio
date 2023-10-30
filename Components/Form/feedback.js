import React, { useEffect, useState } from "react";
import useSWR from "swr";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = () => {
  const [Data, setData] = useState("");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setData(data[0].Feedback);
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
          ? `${classes.container} ${classes.dark}`
          : `${classes.container} ${classes.light}`
      }
    >
      <p>{Data}</p>
    </div>
  );
};

export default Feedback;
