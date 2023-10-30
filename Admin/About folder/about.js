import React, { useState, useEffect } from "react";
import classes from "../about.module.css";
import useSWR from "swr";
import StatusIndicator from "@/Components/Status tag/Status";

const About = () => {
  const [info, setInfo] = useState("No data in about");
  const [isEditing, setIsEditing] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setInfo(data[0].About_me);
    }
    if (error) {
      alert("Error while fetching", error);
    }
  }, [data]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      const response = await fetch("/api/About_me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: info }),
      });
      if (response.status === 200) {
        const jsonData = await response.json();
        setIsSuccessVisible(true);
        setTimeout(() => {
          setIsSuccessVisible(false);
        }, 1000);
      } else {
        const jsonData = await response.json();

        alert("Failed to update data:", jsonData.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <center>
        <h2 style={{ color: "maroon" }}>About</h2>
      </center>

      <div className={classes.div}>
        <div className={classes.content}>
          {isEditing ? (
            <textarea
              type="text"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              autoFocus
              maxLength={375}
            />
          ) : (
            <p className={classes.paragraph} style={{ color: "blue" }}>
              {info}
            </p>
          )}
          <button
            className={classes.btn}
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className={classes.statusIndicator}></div>
      </div>
      <center>
        {isSuccessVisible && <StatusIndicator status="success" />}
      </center>
    </div>
  );
};

export default About;
