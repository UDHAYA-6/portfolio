import React, { useEffect, useState } from "react";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = (props) => {
  const [Data, setData] = useState("");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function myfunc() {
      setLoad(true);
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();

      if (response.ok) {
        setData(data[0].Feedback);
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
      {!load && (
        <div
          className={
            theme
              ? `${classes.container} ${classes.dark}`
              : `${classes.container} ${classes.light}`
          }
        >
          <p>{props.Foot}</p>
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {}
export default Feedback;
