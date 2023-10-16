import React, { useState, useEffect, useRef } from "react";
import classes from "./header.module.css";
import { FaSun, FaMoon, FaBars, FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/themeSlice";

const Header = () => {
  const [mode, setMode] = useState(<FaSun />);
  const theme = useSelector((state) => state.theme.themedark);
  const dispatch = useDispatch();

  const mobileMenuRef = useRef(null);

  const themeClicked = () => {
    dispatch(change());
  };

  function toggleMobileMenu() {
    const mobileMenu = mobileMenuRef.current;
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  }

  const closeMobileMenu = () => {
    mobileMenuRef.current.style.display = "none";
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        mobileMenuRef.current.style.display = "none";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMobileMenu();
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
            <a onClick={() => scrollToSection("home")} href="#">
              <span>
                <FaHome />
              </span>
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")} href="#">
              Education
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")} href="#">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("feedback")} href="#">
              Feedback
            </a>
          </li>
          <li>
            <div>
              <a onClick={themeClicked}>{mode}</a>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.mobile}>
        <div className={classes.mobilemenu} id="myLinks" ref={mobileMenuRef}>
          <a
            onClick={() => {
              scrollToSection("home");
              closeMobileMenu();
            }}
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => {
              scrollToSection("education");
              closeMobileMenu();
            }}
            href="#"
          >
            Education
          </a>
          <a
            onClick={() => {
              scrollToSection("projects");
              closeMobileMenu();
            }}
            href="#"
          >
            Projects
          </a>
          <a
            onClick={() => {
              scrollToSection("feedback");
              closeMobileMenu();
            }}
            href="#"
          >
            Feedback
          </a>
          <a
            onClick={() => {
              themeClicked();
              closeMobileMenu();
            }}
            href="#"
          >
            {mode}
          </a>
        </div>
        <a className={classes.icon} onClick={toggleMobileMenu}>
          <FaBars />
        </a>
      </div>
    </header>
  );
};

export default Header;
