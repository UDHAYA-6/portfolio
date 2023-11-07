import React, { useState, useEffect } from "react";
import classes from "./index.module.css";
import Header from "../Components/Header/Header";
import Main from "@/Components/Main Content/Main";
import Project from "@/Components/Projects/Pro";
import { useSelector } from "react-redux";
import Feedback from "@/Components/Form/feedback";
import Education from "@/Components/Qualifications/eduaction";
const index = () => {
  const [Data, setData] = useState("");
  const [Pro, setPro] = useState([]);
  useEffect(() => {
    async function myfunc() {
      const response = await fetch("api/data", { method: "GET" });
      const data = await response.json();
      if (response.ok) {
        setPro(data[0].Projects);
        const dt = data[0];
        setData(dt.Feedback);
      }
      if (!response.ok) {
        alert("Error while fetching", error);
      }
    }
    myfunc();
  }, []);

  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div className={theme ? `${classes.dark}` : `${classes.light}`}>
      <section className="header">
        <Header />
      </section>

      <section className="main" id="home">
        <Main about={Data.About_me} />
      </section>

      <section id="education">
        <Education Edu={Data.Education} />
      </section>
      <section id="projects">
        <Project Pro={Pro} />
      </section>
      <section id="feedback">
        <Feedback Foot={Data} />
      </section>
    </div>
  );
};

export default index;
