import { useState } from "react";

import styles from "./CounterWithValidation.module.css";

function CounterWithValidation() {
  const [count, setCount] = useState(0);
  const [errorState, setErrorState] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.count}>{count}</h1>
      {errorState && (
        <h3 className={styles.error}>You can't decrement below 0</h3>
      )}
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onClick={() => {
            setErrorState(false);
            setCount(count + 1);
          }}
        >
          +1
        </button>

        <button
          className={styles.button}
          onClick={() =>
            count - 1 < 0 ? setErrorState(true) : setCount(count - 1)
          }
        >
          -1
        </button>

        <button
          className={styles.button}
          onClick={() => {
            setErrorState(false);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterWithValidation;
