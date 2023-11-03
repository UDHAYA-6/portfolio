import React from "react";

import classes from "./index.module.css";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";
import Main from "@/Components/Main Content/Main";
import Project from "@/Components/Projects/Pro";
import { useSelector } from "react-redux";
import Feedback from "@/Components/Form/feedback";
import Education from "@/Components/Qualifications/eduaction";
import Internship from "@/Components/Qualifications/internship";
const index = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <motion.div
      className={theme ? `${classes.dark}` : `${classes.light}`}
      initial={{ y: 200 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 5, type: "spring" }}
    >
      <section className="header">
        <Header />
      </section>

      <section className="main" id="home">
        <Main />
      </section>

      <section id="education">
        <Education />
        <Internship />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="feedback">
        <Feedback />
      </section>
      <footer className="footer"></footer>
    </motion.div>
  );
};

export default index;
