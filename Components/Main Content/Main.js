import classes from "./Main.module.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import useSWR from "swr";
const Main = () => {
  const [Data, setData] = useState("");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setData(data[0].About_me);
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
          ? `${classes.mains} ${classes.dark}`
          : `${classes.mains} ${classes.light}`
      }
    >
      <div className={classes.content}>
        <div className={classes.image}>
          <img alt="Profile picture" src="/udhay.jpg" />
          <div>
            <ul>
              <li className={classes.link}>
                <a
                  href="https://www.linkedin.com/in/udhaya-kumar-developer/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className={classes.twitter}>
                <a href="mailto:udhaya642003@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
              </li>
              <li className={classes.github}>
                <a href="https://github.com/UDHAYA-6" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li className={classes.discord}>
                <a
                  href="https://instagram.com/udhay_kumar_official?igshidOGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.body}>
          <div>
            <h3 className={classes.hello}>Hello!</h3>
            <p className={classes.first}>I'm Udhaya Kumar,</p>
            {Data}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
