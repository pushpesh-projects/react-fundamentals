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
