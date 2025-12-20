import { useState } from "react";

import styles from "./CharacterCount.module.css";
const CharacterCount = () => {
  const [character, setCharacter] = useState("");

  function handleInput(e) {
    const value = e.target.value;
    setCharacter(value);
  }
  const length = character.length;
  let style =
    length < 80
      ? "normal"
      : length >= 80 && length <= 99
      ? "warning"
      : "danger";

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={character}
        onChange={handleInput}
        maxLength={100}
      />
      <p className={styles[style]}>
        {100 - character.length} characters remaining
      </p>
      <button onClick={() => setCharacter("")}>Clear</button>
    </div>
  );
};

export default CharacterCount;
