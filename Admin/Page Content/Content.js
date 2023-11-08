import React, { useState } from "react";
import classes from "./Content.module.css";
import StatusIndicator from "@/Components/Status tag/Status";
import EditProject from "../project folder/Edit project/EditProject";
import NewProject from "../project folder/New project/NewProject";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
const Content = ({ value }) => {
  const [newPro, setnew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(null);
  const [filtered, setfiltered] = useState([]);
  const DeleteButton = async (id) => {
    console.log(id);
    const response = await fetch("/api/delContent", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });
    const jsonData = await response.json();
    alert(jsonData.msg);
  };
  const NewField = () => {
    setnew(true);
  };

  const closeProject = () => {
    setnew(false);
    setEdit(false);
  };
  const EditButton = async (id, index) => {
    const obj = {
      Title: Object.keys(id)[0],
      Desc: Object.values(id)[0],
      id: index,
    };
    console.log(obj);
    setfiltered(obj);
    setEdit(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div className={classes.di}>
        <button className={classes.btn} onClick={NewField}>
          <span> New feild</span>
          <FaPlusCircle size={20} color="green" />
        </button>
        {value.map((item, index) => (
          <div className={classes.content} key={index}>
            <div className={classes.head}>
              <p className={classes.title}>{Object.keys(item)}</p>
              <button
                onClick={() => EditButton(item, index)}
                style={{ backgroundColor: "skyblue" }}
              >
                EDIT
                <FaEdit size={15} />
              </button>
              <button
                onClick={() => DeleteButton(item)}
                style={{ backgroundColor: "rgb(255, 66, 66)" }}
              >
                DELETE
                <FaTrashAlt size={15} />
              </button>
            </div>
            <p className={classes.value}>{Object.values(item)}</p>
          </div>
        ))}
      </div>
      <div className={classes.div}>
        {newPro && <NewProject close={closeProject} value={"newFeild"} />}
        {edit && (
          <EditProject
            data={filtered}
            close={closeProject}
            value={"editField"}
          />
        )}
        {status === "success" && <StatusIndicator status="success" />}
      </div>
    </div>
  );
};

export default Content;
