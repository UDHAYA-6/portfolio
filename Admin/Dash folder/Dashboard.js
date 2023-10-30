import React, { useState, useEffect } from "react";
import classes from "./dashboard.module.css";
import useSWR from "swr";
import StatusIndicator from "@/Components/Status tag/Status";
const Dashboard = () => {
  const [Data, setData] = useState([]);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);
  useEffect(() => {
    if (data) {
      setData(data);
    }
    if (error) {
      alert("Error while fetching", error);
    }
  }, [data]);

  return (
    <div>
      <center>
        <h2>Portfolio</h2>
        <h3>Collection Name: About</h3>
      </center>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Fields</th>
            <th>Length</th>
            <th>Type of the Field</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Data[0] || {}).map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>{Data[0][item].length}</td>
              <td>{typeof Data[0][item]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
