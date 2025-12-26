## ⏰ Exercise 2: Live Clock

### **Exercise 2: Live Clock**

Build a clock that updates every second:

- Shows current time
- Updates automatically
- Cleans up interval on unmount

---

### **What You're Building:**

A digital clock that updates every second automatically.

### **Detailed Requirements:**

1. **Display:**

   - Show current time in readable format (like "10:30:45 AM")
   - Should be clearly visible (use heading tag)

2. **Automatic Updates:**

   - Time should update every 1 second
   - Should feel smooth and natural
   - User doesn't need to do anything - it just updates

3. **Lifecycle Management:**

   - Clock starts ticking when component appears
   - Clock stops ticking when component disappears (CRITICAL!)
   - Should not keep running in background after component unmounts

4. **Performance:**
   - Only ONE timer should be running
   - No memory leaks
   - Should not slow down page

### **What You Need to Figure Out:**

- How do you make something run every second?
- How do you update the time in state?
- What happens if you don't clean up the timer?
- When should the timer start? When should it stop?

## 📊 Difficulty Levels:

**Exercise 2 (Clock):** ⭐⭐ Medium

- Involves setInterval
- Requires cleanup
- Timer management

## 💡 Success Criteria:

**You've succeeded when:**

**Exercise 2:**

- Time updates every second
- Stops updating when component unmounts
- No console errors about memory leaks
