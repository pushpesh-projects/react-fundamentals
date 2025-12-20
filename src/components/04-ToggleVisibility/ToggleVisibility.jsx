import { useState } from "react";
import styles from "./ToggleVisibility.module.css";

const ToggleVisibility = () => {
  const [style, setStyle] = useState("hidePara");
  const [isVisible, setVisible] = useState(false);
  function handleButtonClick() {
    if (!isVisible) {
      setStyle("showPara");
      setVisible(true);
    } else {
      setStyle("hidePara");
      setVisible(false);
    }
  }
  return (
    <div className={styles.container}>
      <p className={`${styles[style]} ${styles.details}`}>
        Hi, I am a paragraph hidden by default but you can toggle my visibility
        by clicking on the button
      </p>
      <button onClick={handleButtonClick}>
        {!isVisible ? "Show Details" : "Hide Details"}
      </button>
    </div>
  );
};

export default ToggleVisibility;
