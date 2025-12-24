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
