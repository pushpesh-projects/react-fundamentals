import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // ✅ Empty array - set up interval once

  return (
    <div>
      <h1>
        Date and Time:{" "}
        {new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "medium",
          timeStyle: "medium",
        }).format(time)}
      </h1>
    </div>
  );
};

export default LiveClock;

// ## 💡 What Changed:

// 1. **Store Date object in state** (not formatted string)
// 2. **Format only when displaying** (in JSX)
// 3. **Empty dependency array** - interval runs once
// 4. **Removed `startTime`** - unnecessary variable

// ---

// ## 🎯 Why Empty Array?

// **Your version:**
// ```
// Mount → Create interval
// 1 second → time changes → Cleanup old interval → Create new interval
// 1 second → time changes → Cleanup old interval → Create new interval
// ... (repeatedly creating/destroying)
// ```

// **Correct version:**
// ```
// Mount → Create interval
// 1 second → time changes → (interval keeps running)
// 1 second → time changes → (same interval keeps running)
// ... (one interval the whole time)
// Unmount → Cleanup interval
