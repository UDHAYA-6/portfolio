import React from "react";
import classes from "./feedback.module.css";
import { useSelector } from "react-redux";
const Feedback = () => {
  const theme = useSelector((state) => state.theme.themedark);
  return (
    <div
      className={
        theme
          ? `${classes.container} ${classes.dark}`
          : `${classes.container} ${classes.light}`
      }
    >
      <form>
        <div>
          <input
            type="email"
            id="input2"
            required
            placeholder="Enter yout email"
          />
        </div>
        <div>
          <textarea
            cols={26}
            rows={2}
            placeholder="Type your comments"
            required
          ></textarea>
        </div>
        <div>
          <center>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </center>
        </div>
      </form>
      <div className={classes.footer}>
        <div>
          <h1 style={{ margin: "0%", padding: "0%" }}>Thanks for visiting</h1>
        </div>
        <div className={classes.para}>
          <p>Redhills,</p>
          <p>Chennai,</p>
          <p>TamilNadu,</p>
          <p>India.</p>
          <p>+91917*****76</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
