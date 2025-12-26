import { useState, useEffect } from "react";

const AutoSaveForm = () => {
  const [note, setNote] = useState(localStorage.getItem("savedNote") || "");

  useEffect(() => {
    localStorage.setItem("savedNote", note);
  }, [note]);

  return (
    <div>
      <label>
        Note:{" "}
        <textarea
          onChange={(e) => setNote(e.target.value)}
          value={note}
        ></textarea>
      </label>
    </div>
  );
};

export default AutoSaveForm;
// useEffect with dependencies runs on first render AND when dependencies change.

// 1. Page loads
//    → useState runs
//    → Checks localStorage for "savedNote"
//    → If found: sets note to saved value
//    → If not found: sets note to "" (empty)

// 2. Component renders
//    → Textarea shows loaded note

// 3. useEffect runs (after first render)
//    → Saves current note to localStorage

// 4. User types "Hello"
//    → setNote("Hello")
//    → Component re-renders
//    → useEffect runs (note changed)
//    → Saves "Hello" to localStorage

// 5. User refreshes page
//    → Loads "Hello" from localStorage ✅
