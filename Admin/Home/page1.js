import React, { useState, useEffect } from "react";
import classes from "./page1.module.css";
import Dashboard from "../Dash folder/Dashboard";
import { FaShieldAlt } from "react-icons/fa";
import About from "../About folder/about";
import Eduacte from "../educatoin folder/educate";
import Intern from "../Intern folder/Intern";
import Project from "../project folder/project";
import Foot from "../Footer folder/Foot";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
const Page1 = () => {
  const router = useRouter();
  const [nav, setNav] = useState({
    Dash: true,
    About: false,
    Education: false,
    Internship: false,
    Projects: false,
    Footer: false,
  });
  const logOut = async () => {
    await signOut();
  };

  const changeNav = (name) => {
    const updatedNav = Object.keys(nav).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    updatedNav[name] = true;
    setNav(updatedNav);
  };

  return (
    <div className={classes.div}>
      <nav className={classes.nav}>
        <div>
          <span style={{ fontSize: "1.3rem" }}>Admin Login</span>
          <span>
            <FaShieldAlt />
          </span>
        </div>
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "0%",
          }}
        >
          View page
        </a>
        <button onClick={logOut} className={classes.logout}>
          Log out
        </button>
      </nav>
      <div className={classes.side}>
        <span onClick={() => changeNav("Dash")}>Dashboard</span>
        <span onClick={() => changeNav("About")}>About_me</span>
        <span onClick={() => changeNav("Education")}>Education</span>
        <span onClick={() => changeNav("Internship")}>Internship</span>
        <span onClick={() => changeNav("Projects")}>Projects</span>
        <span onClick={() => changeNav("Footer")}>Footer</span>
      </div>
      <div className={classes.body}>
        {nav.Dash && <Dashboard />}
        {nav.About && <About />}
        {nav.Education && <Eduacte />}
        {nav.Internship && <Intern />}
        {nav.Projects && <Project />}
        {nav.Footer && <Foot />}
      </div>
    </div>
  );
};

export default Page1;
