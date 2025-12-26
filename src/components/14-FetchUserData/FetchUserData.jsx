import { useState, useEffect } from "react";

const FetchUserData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null); // null instead of empty object
  const [error, setError] = useState(null); // null instead of false

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1") // Valid user
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Early returns for cleaner logic
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default FetchUserData;
