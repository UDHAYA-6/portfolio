import React from "react";
import classes from "./project.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
const Project = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <>
      <center>
        <h1 className={theme ? `${classes.darkhead}` : `${classes.lighthead}`}>
          Projects
        </h1>
      </center>
      <div className={classes.project}>
        <div
          className={
            theme
              ? `${classes.item} ${classes.dark}`
              : `${classes.item} ${classes.light}`
          }
        >
          <Image
            alt="image"
            src="https://www.usnews.com/object/image/0000017e-8d03-de57-a57e-bdb7a7310000/istock-1127637966.jpg?update-time=1643043407037&size=responsive640"
            className={classes.img}
          />
          <p className={classes.title}>Python</p>
          <p className={classes.desc}>
            Voice based college students details management system using speech
            recognization software in python. It simulates and process human
            conversation, allowing human to interact with digital devices.
          </p>
        </div>
        <div
          className={
            theme
              ? `${classes.item} ${classes.dark}`
              : `${classes.item} ${classes.light}`
          }
        >
          <img
            alt="image"
            src="https://www.bleepstatic.com/content/hl-images/2023/08/21/China-hacker.jpg"
            className={classes.img}
          />
          <p className={classes.title}>Python</p>
          <p className={classes.desc}>
            Distance learning in desired language. A e-learning platform enable
            tutors to pursue courses in their comfortable language. Tutors can
            also able to customize their study time as well.
          </p>
        </div>
        <div
          className={
            theme
              ? `${classes.item} ${classes.dark}`
              : `${classes.item} ${classes.light}`
          }
        >
          <img
            alt="image"
            src="https://innovationatwork.ieee.org/wp-content/uploads/2020/03/bigstock-Isometric-Internet-Hacker-Atta-346273381_1024X684.png"
            className={classes.img}
          />
          <p className={classes.title}>Python</p>
          <p className={classes.desc}>
            Fantasy team prediction using pandas. Pandas is a python library u
            for analysing, cleaning and exploring of data. Predicting Fantasy
            team using recently played matches.
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
