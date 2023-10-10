import classes from "./Main.module.css";
import React from "react";

const Main = () => {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.image}>
          <img alt="Profile picture" />
          <div>
            <ul>
              <li>L</li>
              <li>I</li>
              <li>T</li>
            </ul>
          </div>
        </div>
        <div className={classes.body}>
          <p>
            When you develop a mockup page or backend API is not ready for data
            fetching and you have to make Frontend Development with static data
            until it comes, react-lorem-ipsum will create your gibberish texts
            for you. In addition to Lorem Ipsum text, you can generate random
            avatars, names, surnames, full names and usernames to fill the
            fields about users randomly. 👍 React Lorem Ipsum is a
            zero-dependency, easy-to-use package.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
