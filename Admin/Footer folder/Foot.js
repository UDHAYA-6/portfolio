import React, { useState, useEffect } from "react";
import classes from "../about.module.css";
import useSWR from "swr";
import StatusIndicator from "@/Components/Status tag/Status";

const Foot = () => {
  const [info, setInfo] = useState("No data in about");
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(null);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  useEffect(() => {
    if (data) {
      setInfo(data[0].Feedback);
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
      const response = await fetch("/api/Feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: info }),
      });

      if (response.status === 200) {
        const jsonData = await response.json();
        setStatus("success"); // Set the status to success
        alert("Data successfully updated:", jsonData.msg);
        // Clear the status after 2 seconds
        setTimeout(() => {
          setStatus(null);
        }, 2000);
      } else {
        const jsonData = await response.json();
        setStatus("error"); // Set the status to error
        alert("Failed to update data:", jsonData.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <center>
        <h2 style={{ color: "purple" }}>About</h2>
      </center>
      <div className={classes.div}>
        {isEditing ? (
          <textarea
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            autoFocus
            maxLength={375}
          />
        ) : (
          <p className={classes.paragraph} style={{ color: "red" }}>
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
      <center>
        {status === "success" && <StatusIndicator status="success" />}
      </center>
    </div>
  );
};

export default Foot;
