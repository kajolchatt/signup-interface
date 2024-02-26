import styles from "./LeftComponent.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function LeftComponent() {
  const points = [
    "Bulk upload files to check for AI.",
    "Review AI results per submission.",
    "Export results for bulk uploads.",
    "Access API key.",
  ];

  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.heading}>
          Sign up to gain access to the Checkfor.ai dashboard
        </div>
        <ul className={styles.customlist}>
          {points.map((item, index) => (
            <li key={index}>
              <div className={styles.greenBg}>
                <div className={styles.circle}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LeftComponent;
