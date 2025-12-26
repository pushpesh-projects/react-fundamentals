## 📏 Exercise 3: Window Width Tracker

### **Exercise 3: Window Width Tracker**

Build a component that shows window width:

- Displays current window width
- Updates when window is resized
- Removes event listener on unmount

---

### **What You're Building:**

A component that shows the current browser window width and updates when user resizes.

### **Detailed Requirements:**

1. **Initial Display:**

   - When page loads, show current window width in pixels
   - Example: "Window width: 1920px"

2. **Live Updates:**

   - When user resizes browser window, number updates in real-time
   - Should feel responsive and immediate
   - Works when making window bigger OR smaller

3. **Event Management:**

   - Listen to window resize events
   - Update display every time resize happens
   - Clean up listener when component is removed (CRITICAL!)

4. **Display Format:**
   - Clear, readable text
   - Show the actual number with "px" unit
   - Maybe add some context like "Current window width: Xpx"

### **What You Need to Figure Out:**

- How do you detect window resizing?
- How do you get the current window width?
- When should you start listening for resize events?
- What happens if you don't remove the event listener?
- How do you remove an event listener?

## 📊 Difficulty Levels:

**Exercise 1 (Auto-Save):** ⭐⭐ Medium

- Involves localStorage
- State initialization
- Dependency array decision

**Exercise 2 (Clock):** ⭐⭐ Medium

- Involves setInterval
- Requires cleanup
- Timer management

**Exercise 3 (Window Width):** ⭐⭐⭐ Medium-Hard

- Event listeners (new concept)
- Window API
- Event cleanup

**Exercise 4 (Fetch Data):** ⭐⭐⭐ Medium-Hard

- API calls
- Multiple states (loading, data, error)
- Async operations
- Error handling

---

## 💡 Success Criteria:

**You've succeeded when:**

**Exercise 1:**

- Note saves as you type
- Note persists after page refresh
- No errors in console

**Exercise 2:**

- Time updates every second
- Stops updating when component unmounts
- No console errors about memory leaks

**Exercise 3:**

- Shows current width
- Updates when you resize browser
- No errors when component unmounts

**Exercise 4:**

- Shows "Loading..." initially
- Shows user data after fetch succeeds
- Shows error if something goes wrong
- Fetches only once

---
