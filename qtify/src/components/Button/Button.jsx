import React from "react";
import styles from "./Button.module.css";

const Button = (props, children) => {
  
  return <div className={styles.btn}>{props.children}</div>;
};

export default Button;
