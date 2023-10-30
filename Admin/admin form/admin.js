import React, { useRef, useState } from "react";
import classes from "./admin.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
const Admin = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const visiblity = () => {
    setShow(!show);
  };

  const emailRef = useRef();
  const passRef = useRef();
  const formSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response.error) {
      console.log("error", response);
      alert("Invalid credentials");
    } else {
      console.log("correct");
      console.log(response);
      router.replace("/Adminpannel");
    }
  };

  return (
    <div className={classes.admin}>
      <div className={classes.div1}>
        <form className={classes.form} onSubmit={formSubmit}>
          <center>
            <h2>Admin Login</h2>
          </center>
          <div className={classes.div}>
            <input
              className={classes.input}
              type="email"
              required
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className={classes.div} style={{ display: "flex" }}>
            <input
              type={show ? "text" : "password"}
              className={classes.input}
              required
              placeholder="Password"
              ref={passRef}
            />
            <span
              style={{
                marginLeft: "-1.5rem",
                marginTop: "0.7rem",
                color: "black",
              }}
              onClick={visiblity}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <center className={classes.div}>
            <button type="submit" className={classes.btn}>
              Log In
            </button>
          </center>
        </form>
      </div>
      <div className={classes.div2}></div>
    </div>
  );
};

export default Admin;
