import React, { useState } from "react";
import classes from "../project.module.css";
const EditProject = (props) => {
  const filtered = props.data;
  console.log(filtered);
  const [tit, setTit] = useState(filtered.Title);
  const [des, setDes] = useState(filtered.Desc);
  const TitleChangeHandler = (event) => {
    setTit(event.target.value);
  };

  const DesChangeHandler = (event) => {
    setDes(event.target.value);
  };
  const EditProjectFrom = async (event) => {
    event.preventDefault();
    const Title = tit;
    const Description = des;
    const id = filtered.id;
    const response = await fetch(`/api/${props.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Title, Description, id: id }),
    });
    const jsonData = await response.json();
    alert(jsonData.msg);
    props.close();
  };

  return (
    <div>
      <form className={classes.form} onSubmit={EditProjectFrom}>
        <span onClick={props.close}>X</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{props.value}</p>
          <input
            required
            onChange={TitleChangeHandler}
            type="text"
            placeholder="Enter title"
            defaultValue={filtered.Title}
          />
          <textarea
            required
            onChange={DesChangeHandler}
            rows={6}
            type="text"
            defaultValue={filtered.Desc}
            placeholder="Enter Description"
          />
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
