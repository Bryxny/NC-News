import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { user, login } = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [username, setUsername] = useState("grumpy19");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
  };
  return (
    <div className="login-container">
      {isClicked ? (
        <div className="login-dropdown">
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              defaultValue="grumpy19"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
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
