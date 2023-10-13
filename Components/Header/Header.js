import classes from "./header.module.css";
import { FaSun, FaMoon, FaBars, FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/themeSlice";
import { useEffect, useState } from "react";
const Header = () => {
  const [mode, setMode] = useState(<FaSun />);
  const theme = useSelector((state) => state.theme.themedark);
  console.log(theme);
  const dispatch = useDispatch();
  const themeClicked = () => {
    dispatch(change());
  };
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  useEffect(() => {
    if (theme) {
      setMode(<FaSun />);
    } else {
      setMode(<FaMoon />);
    }
  }, [theme]);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header
      className={
        theme
          ? `${classes.nav} ${classes.dark}`
          : `${classes.nav} ${classes.light}`
      }
    >
      <div>
        <p>UDHAYA {"  "} KUMAR</p>
      </div>
      <div className={classes.desktop}>
        <ul>
          <li>
            <a onClick={() => scrollToSection("home")}>
              <span>
                <FaHome />
              </span>
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("feedback")}>Feedback</a>
          </li>
          <li>
            <div>
              <a onClick={themeClicked}>{mode}</a>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.mobile}>
        <div className={classes.mobilemenu} id="myLinks">
          <a onClick={() => scrollToSection("home")}>Home</a>

          <a onClick={() => scrollToSection("Projects")}>Projects</a>

          <a onClick={() => scrollToSection("feedback")}>feedback</a>

          <a onClick={themeClicked}>{mode}</a>
        </div>
        <a
          href="javascript:void(0);"
          className={classes.icon}
          onClick={myFunction}
        >
          <FaBars />
        </a>
      </div>
    </header>
  );
};

export default Header;
