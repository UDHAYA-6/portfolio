import React, { useState, useEffect } from "react";
import classes from "./page1.module.css";
import Dashboard from "../Dash folder/Dashboard";
import { FaShieldAlt } from "react-icons/fa";
import About from "../About folder/about";
import Project from "../project folder/project";
import { signOut } from "next-auth/react";
import Content from "../Page Content/Content";
const Page1 = () => {
  const [Data, setData] = useState("");
  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        const dt = data[0];
        setData(dt);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, []);
  const [nav, setNav] = useState({
    Dash: true,
    About_me: false,
    Feedback: false,
    Projects: false,
    Content: false,
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
        {Object.keys(Data).map((item, index) => (
          <span
            key={index + 1}
            onClick={() => changeNav(`${Object.keys(Data)[index + 1]}`)}
          >
            {Object.keys(Data)[index + 1]}
          </span>
        ))}
      </div>

      <div className={classes.body}>
        {nav.Dash && <Dashboard />}
        {nav.About_me && <About value={"About_me"} />}
        {nav.Content && <Content value={Data.Content} />}
        {nav.Projects && <Project />}
        {nav.Feedback && <About value={"Feedback"} />}
      </div>
    </div>
  );
};

export default Page1;
