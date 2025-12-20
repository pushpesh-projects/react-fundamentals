Challenge #3: Character Counter
Requirements:

Input field where user can type text
Display character count in real-time

Format: "X/100 characters" (where X is current count)

Color-coded feedback:

Normal color when under 80 characters
Yellow/warning color when 80-99 characters
Red color when at 100 characters

Prevent typing beyond 100 characters

User should NOT be able to type more than 100 characters

Clear button that empties the input and resets count
BONUS (Optional): Show remaining characters instead

Example: "85 characters remaining" instead of "15/100 characters"

Expected Behavior:

User types "Hello" → Shows "5/100 characters" (normal color)
User types 85 characters → Shows "85/100 characters" (yellow)
User types 100 characters → Shows "100/100 characters" (red)
User tries to type 101st character → Input prevents it
User clicks Clear → Input empties, shows "0/100 characters"
