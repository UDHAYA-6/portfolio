import React, { useState, useEffect } from "react";
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
  const [Data, setData] = useState("No data is fetched");
  const [Pro, setPro] = useState([]);
  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        setPro(data[0].Projects);
        setData(data[0]);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, []);
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <motion.div
      className={theme ? `${classes.dark}` : `${classes.light}`}
      // initial={{ y: 200 }}
      // animate={{ y: 0, x: 0 }}
      // transition={{ duration: 5, type: "spring" }}
    >
      <section className="header">
        <Header />
      </section>

      <section className="main" id="home">
        <Main about={Data.About_me} />
      </section>

      <section id="education">
        <Education Edu={Data.Education} />
        <Internship Int={Data.Internship} />
      </section>
      <section id="projects">
        <Project Pro={Pro} />
      </section>
      <section id="feedback">
        <Feedback Foot={Data.Feedback} />
      </section>
    </motion.div>
  );
};

export default index;
