import React from "react";
import classes from "./index.module.css";
import Header from "../Components/Header/Header";
import Main from "@/Components/Main Content/Main";
import Project from "@/Components/Projects/Pro";
import { useSelector } from "react-redux";
import Feedback from "@/Components/Form/feedback";
const index = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div className={theme ? `${classes.dark}` : `${classes.light}`}>
      <section className="header">
        <Header />
      </section>
      <section className="main" id="home">
        <Main />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="feedback">
        <Feedback />
      </section>
      <footer className="footer"></footer>
    </div>
  );
};

export default index;
