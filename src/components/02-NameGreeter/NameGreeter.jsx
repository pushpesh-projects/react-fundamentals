import { useState } from "react";
import styles from "./NameGreeter.module.css";

const NameGreeter = () => {
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {name ? (
        <p
          className={`${styles.message} ${styles.greeting}`}
        >{`Hello, ${name}!`}</p>
      ) : (
        <p className={`${styles.message} ${styles.placeholder}`}>
          Please enter your name
        </p>
      )}
      <button className={styles.button} onClick={() => setName("")}>
        Clear
      </button>
    </div>
  );
};

export default NameGreeter;
