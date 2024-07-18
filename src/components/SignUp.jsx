import { useState } from "react";

function SignUp({ setToken, username, setUsername }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Sign up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={submit}>
        <label>
          Username:
          <input
            type="text"
            name={"username"}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            minLength={"8"}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name={"password"}
            placeholder={"Enter password"}
            onChange={(e) => setPassword(e.target.value)}
            minLength={"8"}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default SignUp;