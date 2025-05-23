import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { error, login } = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [username, setUsername] = useState("Beary19");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
  };
  return (
    <div className="login-container">
      {isClicked ? (
        <form className="login-dropdown" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            type="text"
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <button type="submit">submit</button>{" "}
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <a
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          login
        </a>
      )}
    </div>
  );
}
