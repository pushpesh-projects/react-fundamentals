## 👤 Exercise 4: Fetch User Data

### **Exercise 4: Fetch User Data**

Build a component that fetches and displays user data:

- Fetch from `https://jsonplaceholder.typicode.com/users/1`
- Show loading state
- Handle errors
- Display user name and email

### **What You're Building:**

A component that fetches user data from an API and displays it nicely.

### **Detailed Requirements:**

1. **API Endpoint:**

   - Use: `https://jsonplaceholder.typicode.com/users/1`
   - This returns fake user data (name, email, etc.)

2. **Three States to Handle:**

   **a) Loading State:**

   - When component first appears, show "Loading..."
   - This is BEFORE data arrives

   **b) Success State:**

   - When data arrives successfully, show:
     - User's name
     - User's email
     - Maybe username or other info
   - Hide the loading message

   **c) Error State:**

   - If fetch fails (no internet, wrong URL, etc.), show error message
   - Something like "Failed to load user data"
   - Hide the loading message

3. **Timing:**

   - Fetch should happen automatically when component appears
   - User doesn't need to click anything
   - Fetch only ONCE (not repeatedly)

4. **User Experience:**
   - Always show SOMETHING (never blank screen)
   - Clear feedback at each stage (loading → success/error)
   - Error messages should be helpful

### **What You Need to Figure Out:**

- When should you start fetching? (On mount? On update?)
- How do you know if data is still loading?
- How do you know if fetch succeeded or failed?
- How do you handle errors in fetch?
- Should you fetch multiple times or just once?
- What should display at each stage (loading, success, error)?

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
