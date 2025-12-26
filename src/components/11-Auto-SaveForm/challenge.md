## 📝 Exercise 1: Auto-Save Form

Build a form that automatically saves to localStorage:

- Input field for note
- Save to localStorage every time note changes
- Load from localStorage on mount

### **What You're Building:**

A notes app that automatically saves to localStorage as you type.

### **Detailed Requirements:**

1. **Initial Load Behavior:**

   - When page first loads, check if there's a saved note in localStorage
   - If yes, display that saved note in the textarea
   - If no, show empty textarea

2. **Typing Behavior:**

   - User can type freely in a textarea
   - Every time the text changes, automatically save it to localStorage
   - No "Save" button needed - it's automatic!

3. **Persistence:**

   - Close the browser tab
   - Open it again
   - The note should still be there (loaded from localStorage)

4. **Optional Enhancement:**
   - Show a small "Saved!" indicator that appears briefly after each save

### **What You Need to Figure Out:**

- When should you save to localStorage? (After every keystroke? When?)
- When should you load from localStorage? (Once? Multiple times?)
- What should happen if localStorage is empty?
- How do you prevent saving on the very first render?

---

## 📊 Difficulty Levels:

**Exercise 1 (Auto-Save):** ⭐⭐ Medium

- Involves localStorage
- State initialization
- Dependency array decision

## 💡 Success Criteria:

**You've succeeded when:**

**Exercise 1:**

- Note saves as you type
- Note persists after page refresh
-
