import styles from "./ListPoint.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
const ListPoint = ({ dataPoints }) => {
  return (
    <ul className={styles.customlist}>
      {dataPoints.map((item, index) => (
        <li key={index}>
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: "rgb(36, 196, 36)",
              marginRight: "15px",
              fontSize: "1.5em",
              position: "relative",
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              right: "95%",
              transform: "translate(-40%, -65%)",
              fontSize:"0.9rem"
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListPoint;
