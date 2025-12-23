import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [submittedUser, setSubmittedUser] = useState(null);

  const usernameLength = user.username.trim().length;
  const passwordLength = user.password.length;
  const usernameError =
    usernameLength > 0 && usernameLength < 3
      ? "Username must be at least 3 characters"
      : null;
  const passwordError =
    passwordLength > 0 && passwordLength < 6
      ? "Password must be at least 6 characters"
      : null;

  const getPasswordStrength = () => {
    if (passwordLength >= 10 && /[^A-Za-z0-9]/.test(user.password)) {
      return "strong";
    } else if (passwordLength >= 6) {
      return "medium";
    } else if (passwordLength > 0 && passwordLength < 6) {
      return "weak";
    }
  };
  const passwordStrength = getPasswordStrength();

  const isFormValid = usernameLength >= 3 && passwordLength >= 6;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedUser(user);
    setUser({ username: "", password: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setSubmittedUser(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            placeholder="enter username"
            onChange={handleChange}
            value={user.username}
          />
          {usernameError && <span>{usernameError}</span>}
        </label>
      </div>

      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            placeholder="enter password"
            onChange={handleChange}
            value={user.password}
          />
          {passwordError && <span>{passwordError}. </span>}
          {!passwordError && passwordStrength && (
            <span>Password strength: {passwordStrength}</span>
          )}
        </label>
      </div>

      <div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
        {submittedUser && (
          <p>Login successful! Welcome, {submittedUser.username} </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
