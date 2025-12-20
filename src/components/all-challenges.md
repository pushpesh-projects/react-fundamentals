## React Fundamentals - Complete Exercise Series

---

## ✅ **Challenge #1: Counter with Validation** (COMPLETED)

### Requirements:

1. Display a number starting at 0
2. Three buttons: +1, -1, Reset
3. Show error message "You can't decrement below 0" when user tries to go below 0
4. Error message should disappear when user increments or resets

---

## ✅ **Challenge #2: Name Greeter** (COMPLETED)

### Requirements:

1. Input field for name
2. Display "Hello, [name]!" as user types
3. Clear button to empty the input
4. Show "Please enter your name" when input is empty

---

## **Challenge #3: Character Counter**

### Requirements:

1. Input field where user can type text
2. Display character count in real-time: "X/100 characters"
3. Color-coded feedback:
   - Normal color when under 80 characters
   - Yellow/warning color when 80-99 characters
   - Red color when at 100 characters
4. Prevent typing beyond 100 characters (hard limit)
5. Clear button that empties input and resets count
6. **BONUS:** Show remaining characters ("85 characters remaining")

### Expected Behavior:

- Type "Hello" → "5/100 characters" (normal)
- Type 85 chars → "85/100 characters" (yellow)
- Type 100 chars → "100/100 characters" (red)
- Try typing 101st character → Input blocks it
- Click Clear → Shows "0/100 characters"

---

## **Challenge #4: Toggle Visibility**

### Requirements:

1. A button that says "Show Details" initially
2. A paragraph of text (hidden by default)
3. Clicking button toggles text visibility
4. Button text changes:
   - "Show Details" when text is hidden
   - "Hide Details" when text is visible
5. **BONUS:** Add a smooth fade-in animation

### Expected Behavior:

- Initial: Button says "Show Details", no text visible
- Click button → Text appears, button says "Hide Details"
- Click again → Text disappears, button says "Show Details"

---

## **Challenge #5: Simple Todo (Add Only)**

### Requirements:

1. Input field for todo text
2. "Add" button to add todos
3. Display list of all todos below
4. Clear input after adding todo
5. Show "No todos yet" message when list is empty
6. **BONUS:** Prevent adding empty todos

### Expected Behavior:

- Type "Buy milk" → Click Add → Todo appears in list
- Input clears after adding
- Type " " (spaces only) → Add button does nothing (bonus)
- Empty list shows "No todos yet"

---

## **Challenge #6: Todo with Delete**

### Requirements:

1. All features from Challenge #5
2. Each todo has a "Delete" button next to it
3. Clicking delete removes that specific todo
4. If all todos deleted, show "No todos yet" again
5. **BONUS:** Add a "Delete All" button that clears entire list

### Expected Behavior:

- Add 3 todos → All appear in list
- Click delete on 2nd todo → Only that one disappears
- Delete all todos → Shows "No todos yet"
- Click "Delete All" → Entire list clears (bonus)

---

## **Challenge #7: Two-Input Form**

### Requirements:

1. Input field for Name
2. Input field for Email
3. Submit button
4. On submit:
   - Display entered data below form
   - Clear both inputs
   - Don't reload page
5. Show placeholder text before any submission
6. **BONUS:** Only show submitted data if both fields are filled

### Expected Behavior:

- Fill name "John" and email "john@email.com"
- Click Submit → Shows "Name: John, Email: john@email.com"
- Both inputs clear
- Fill only name → Submit → Nothing happens (bonus)

---

## **Challenge #8: Login Form with Validation**

### Requirements:

1. Username input (min 3 characters)
2. Password input (min 6 characters)
3. Submit button (disabled until form is valid)
4. Show error messages:
   - "Username must be at least 3 characters" (if too short)
   - "Password must be at least 6 characters" (if too short)
5. On successful submit:
   - Show "Login successful! Welcome, [username]"
   - Clear form
6. **BONUS:** Show password strength indicator (weak/medium/strong)

### Expected Behavior:

- Type "ab" in username → Error shows
- Type "abc" → Error disappears
- Type "12345" in password → Error shows, submit disabled
- Type "123456" → Error disappears, submit enabled
- Click submit → Success message appears

---

## **Challenge #9: Shopping List**

### Requirements:

1. Input to add items
2. Add button
3. Each item shows:
   - Checkbox (to mark as purchased)
   - Item name (strikethrough if checked)
   - Delete button
4. Show count: "X items remaining" (unchecked items only)
5. Items that are checked should look different (strikethrough, gray)
6. **BONUS:** "Clear Completed" button to delete all checked items

### Expected Behavior:

- Add "Milk", "Bread", "Eggs" → Shows "3 items remaining"
- Check "Milk" → Text gets strikethrough, shows "2 items remaining"
- Uncheck "Milk" → Strikethrough removed, shows "3 items remaining"
- Delete "Bread" → Only that item removed
- Click "Clear Completed" → All checked items deleted (bonus)

---

## **Challenge #10: Filter/Search List**

### Requirements:

1. Display a list of users with this data:
   ```javascript
   [
     { id: 1, name: "Alice Johnson", email: "alice@example.com" },
     { id: 2, name: "Bob Smith", email: "bob@example.com" },
     { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
     { id: 4, name: "Diana Prince", email: "diana@example.com" },
     { id: 5, name: "Eve Wilson", email: "eve@example.com" },
   ];
   ```
2. Search input that filters list in real-time
3. Search should work on both name and email
4. Show count: "Found X users"
5. Case-insensitive search
6. **BONUS:** Highlight matched text in results

### Expected Behavior:

- Shows all 5 users initially
- Type "alice" → Shows only Alice Johnson
- Type "smith" → Shows only Bob Smith
- Type "@example" → Shows all users (matches all emails)
- Type "xyz" → Shows "Found 0 users" with empty list

---

## **Challenge #11: Temperature Converter**

### Requirements:

1. Two inputs:
   - Celsius input
   - Fahrenheit input
2. When user types in Celsius → Fahrenheit updates automatically
3. When user types in Fahrenheit → Celsius updates automatically
4. Show formula below: "Formula: °F = (°C × 9/5) + 32"
5. Round to 2 decimal places
6. **BONUS:** Add Kelvin conversion too

### Expected Behavior:

- Type "0" in Celsius → Fahrenheit shows "32"
- Type "100" in Celsius → Fahrenheit shows "212"
- Type "32" in Fahrenheit → Celsius shows "0"
- Clear one input → Other stays (doesn't clear automatically)

---

## **Challenge #12: Multi-Step Form**

### Requirements:

1. **Step 1:** Personal Info
   - Name input
   - Email input
   - "Next" button
2. **Step 2:** Address Info
   - Address input
   - City input
   - "Back" and "Next" buttons
3. **Step 3:** Review & Submit
   - Show all entered data
   - "Back" and "Submit" buttons
4. After submit → Show success message with all data
5. Progress indicator showing current step (1/3, 2/3, 3/3)
6. **BONUS:** Validate each step before allowing "Next"

### Expected Behavior:

- Fill Step 1 → Click Next → Goes to Step 2
- Click Back → Returns to Step 1 with data preserved
- Complete all steps → Submit → Shows confirmation

---

## **Challenge #13: Tab Component**

### Requirements:

1. Three tabs: "About", "Skills", "Contact"
2. Clicking tab switches content below
3. Active tab should look different (highlighted)
4. Content for each tab:
   - About: Paragraph about yourself
   - Skills: List of skills
   - Contact: Email and phone
5. **BONUS:** Add animation when switching tabs

### Expected Behavior:

- "About" tab active initially
- Click "Skills" → Tab highlights, content changes
- Click "Contact" → Tab highlights, content changes
- Previously active tab returns to normal style

---

## **Challenge #14: Color Picker & Preview**

### Requirements:

1. Three sliders for RGB values (0-255):
   - Red slider
   - Green slider
   - Blue slider
2. Display current RGB values: "RGB(255, 128, 0)"
3. Large preview box showing the color
4. Display hex code: "#FF8000"
5. "Random Color" button that generates random RGB
6. **BONUS:** Copy hex code to clipboard button

### Expected Behavior:

- Move red slider → Preview updates, RGB and hex update
- Move all sliders → See color change in real-time
- Click Random → All sliders and preview update to random color

---

## **Challenge #15: Quiz App**

### Requirements:

1. Display one question at a time with multiple choice answers
2. Use this data:
   ```javascript
   [
     { question: "What is 2+2?", options: ["3", "4", "5"], correct: 1 },
     {
       question: "Capital of France?",
       options: ["Berlin", "Madrid", "Paris"],
       correct: 2,
     },
     {
       question: "React is a...?",
       options: ["Language", "Library", "Framework"],
       correct: 1,
     },
   ];
   ```
3. Click answer → Goes to next question
4. Show score at the end: "You scored X/3"
5. "Restart Quiz" button to start over
6. **BONUS:** Highlight correct/incorrect answers before moving to next

### Expected Behavior:

- Shows first question with 3 options
- Click answer → Next question appears
- After 3rd question → Shows final score
- Click Restart → Back to question 1

---

## 📊 Concepts Covered:

| Challenge | New Concepts                                                 |
| --------- | ------------------------------------------------------------ |
| 1-2       | useState, events, controlled inputs, conditional rendering   |
| 3         | String manipulation, input restrictions, conditional styling |
| 4         | Boolean toggles, dynamic button text                         |
| 5-6       | Arrays, map(), filter(), keys, deleting items                |
| 7-8       | Multiple inputs, form validation, disabled states            |
| 9         | Checkboxes, objects in arrays, computed values               |
| 10        | Filtering data, search functionality                         |
| 11        | Synchronized inputs, calculations, two-way binding           |
| 12        | Multi-step flows, navigation between steps                   |
| 13        | Tabs, switching content, active states                       |
| 14        | Range inputs, RGB/Hex conversion, computed styles            |
| 15        | Quiz logic, scoring, iterating through data                  |

---

**Start with Challenge #3 and work your way up!** Each one builds on previous concepts. 🚀

Take your time, and show me your solutions as you complete them!
