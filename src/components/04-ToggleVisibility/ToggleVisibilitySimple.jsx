import { useState } from "react";
import styles from "./ToggleVisibility.module.css";

const ToggleVisibilitySimple = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      {isVisible && (
        <p className={styles.details}>
          Hi, I am a paragraph hidden by default but you can toggle my
          visibility by clicking on the button
        </p>
      )}

      <button
        onClick={() => (!isVisible ? setVisible(true) : setVisible(false))}
      >
        {!isVisible ? "Show Details" : "Hide Details"}
      </button>
    </div>
  );
};

export default ToggleVisibilitySimple;
