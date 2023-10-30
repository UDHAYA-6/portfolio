import React, { useRef } from "react";
import classes from "../project.module.css";

const NewProject = (props) => {
  const titleRef = useRef();
  const descRef = useRef();

  const AddProjectFrom = async (event) => {
    event.preventDefault();
    const Title = titleRef.current.value;
    const Description = descRef.current.value;

    const response = await fetch("/api/newProject", {
      method: "POST",
      body: JSON.stringify({ Title, Description }),
      headers: { "Content-Type": "application/json" },
    });

    const jsonData = await response.json();
    alert(jsonData.msg);

    titleRef.current.value = "";
    descRef.current.value = "";

    props.close();
  };

  return (
    <div>
      <form className={classes.form} onSubmit={AddProjectFrom}>
        <span onClick={props.close}>X</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Add new project</p>
          <input
            ref={titleRef}
            required
            type="text"
            placeholder="Enter title"
          />
          <textarea
            required
            ref={descRef}
            rows={6}
            type="text"
            placeholder="Enter Description"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
