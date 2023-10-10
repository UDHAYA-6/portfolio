import React from "react";
import classes from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={classes.nav}>
      <div>
        <p>Name</p>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Media</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
