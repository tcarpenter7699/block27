import SignUp from "./components/SignUp";
import { useState } from "react";

import "./App.css";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  return (
    <>
      <Authenticate
        setToken={setToken}
        token={token}
        username={username}
        setUsername={setUsername}
      />
      <SignUp
        setToken={setToken}
        token={token}
        username={username}
        setUsername={setUsername}
      />
    </>
  );
}

export default App;