import React from "react";
import styles from "./MusicStyle.module.css";

const MusicStylePropBox = (props) => {
  return (
    <ul className={styles.Styles}>
      <li className={styles.Style}>
        <div className={styles.Image}>
          <img className={styles.Icon} alt="" src={props.icon} />
          <div className={styles.ImageFilter}>
            <p>{props.name}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MusicStylePropBox;
