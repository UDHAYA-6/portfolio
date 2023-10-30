import React, { useState, useEffect } from "react";
import classes from "./project.module.css";
import useSWR from "swr";
import StatusIndicator from "@/Components/Status tag/Status"; // Import the StatusIndicator component

import EditProject from "./Edit project/EditProject";
import NewProject from "./New project/NewProject";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";

const Project = () => {
  const [info, setInfo] = useState("No data in about");
  const [newPro, setnew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filtered, setfiltered] = useState([]);
  const [status, setStatus] = useState(null); // Add a status state

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setInfo(data[0].Projects);
    }
    if (error) {
      alert("Error while fetching", error);
    }
  }, [data]);

  const NewProjectTab = () => {
    setnew(true);
  };

  const closeProject = () => {
    setnew(false);
    setEdit(false);
  };

  const delProject = async (id) => {
    const response = await fetch("/api/delProject", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    setStatus("success"); // Set status to success
    setTimeout(() => {
      setStatus(null); // Clear the status after 2 seconds
    }, 2000);
    alert(jsonData.msg);
  };

  const editProject = async (id) => {
    setEdit(true);
    const dt = info.find((item) => item.id === id);
    setfiltered(dt);
  };

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h2>Project details</h2>
        <div className={classes.header}>
          <p>Projects</p>
          <button onClick={NewProjectTab}>
            New <FaPlusCircle size={15} />
          </button>
        </div>

        {Array.isArray(info) ? (
          info.map((item, index) => (
            <div key={item.id} className={classes.title}>
              <p>{index + 1}</p>
              <p>{item.Title}</p>
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => editProject(item.id)}
                  style={{ backgroundColor: "orange" }}
                >
                  <FaEdit />
                </button>
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => delProject(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>info is not an array</p>
        )}
      </div>
      <div className={classes.div}>
        {newPro && <NewProject close={closeProject} />}
        {edit && <EditProject data={filtered} close={closeProject} />}
        {status === "success" && <StatusIndicator status="success" />}
      </div>
    </div>
  );
};

export default Project;
