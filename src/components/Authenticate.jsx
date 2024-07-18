import { useState } from "react";
function Authenticate({ token, username }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage === "Correctly Authenticated!" ? (
        <p>
          Success: {successMessage} Username: {username}
        </p>
      ) : (
        <p></p>
      )}
      {error && <p>Error: {error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
export default Authenticate;