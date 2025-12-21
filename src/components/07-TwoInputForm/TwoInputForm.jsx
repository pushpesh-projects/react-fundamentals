import { useState } from "react";

const TwoInputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    if (!name || !email) return;
    e.preventDefault();
    setSubmittedData({ name, email });
    setName("");
    setEmail("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      {submittedData && (
        <div>
          <p>
            Name: {submittedData.name}, Email: {submittedData.email}
          </p>
        </div>
      )}
    </form>
  );
};

export default TwoInputForm;
