import classes from "./Main.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
const Main = () => {
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
          <img
            alt="Profile picture"
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          />
          <div>
            <ul>
              <li className={classes.link}>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>

              <li className={classes.twitter}>
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li className={classes.github}>
                <a href="https://github.com/UDHAYA-6" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li className={classes.discord}>
                <a href="/">
                  <FaDiscord />
                </a>
              </li>
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
    </div>
  );
};

export default Main;
