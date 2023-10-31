// components/MovingDiv.js
import React, { useEffect, useState } from "react";
import styles from "./move.module.css";

const MovingDiv = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the animation after a delay
    setTimeout(() => {
      setIsAnimating(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return <div className={`${styles.animation} ${styles.movingdiv}`}></div>;
};

export default MovingDiv;
