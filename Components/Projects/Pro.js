import React from "react";
import classes from "./project.module.css";
const Project = () => {
  return (
    <>
      <center>
        <h1 className={classes.heading}>Projects</h1>
      </center>
      <div className={classes.project}>
        <div className={classes.item}>
          <img
            alt="image"
            src="https://www.usnews.com/object/image/0000017e-8d03-de57-a57e-bdb7a7310000/istock-1127637966.jpg?update-time=1643043407037&size=responsive640"
            className={classes.img}
          />
          <p className={classes.title}>Python</p>
          <p className={classes.desc}>
            Python is a high-level, general-purpose programming language. Its
            design philosophy emphasizes code readability with the use of
            significant indentation
          </p>
        </div>
        <div className={classes.item}>
          <img
            alt="image"
            src="https://www.bleepstatic.com/content/hl-images/2023/08/21/China-hacker.jpg"
            className={classes.img}
          />
          <p className={classes.title}>Java script</p>
          <p className={classes.desc}>
            JavaScript often abbreviated as JS, is a programming language that
            is one of the coreWide Web, alongside of websites use JavaScript on
            the client side
          </p>
        </div>
        <div className={classes.item}>
          <img
            alt="image"
            src="https://innovationatwork.ieee.org/wp-content/uploads/2020/03/bigstock-Isometric-Internet-Hacker-Atta-346273381_1024X684.png"
            className={classes.img}
          />
          <p className={classes.title}>Java</p>
          <p className={classes.desc}>
            Java is a high-level, class-based, object-oriented programming
            language that is designed to have as few implementation dependencies
            as possible
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
