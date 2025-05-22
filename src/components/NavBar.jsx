import { Link } from "react-router";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">
          <img src="src/assets/25694.png" height="30px" />
        </Link>
      </li>
      <li>
        <Link to="/articles?topic=coding">coding</Link>
      </li>
      <li>
        <Link to="/articles?topic=football">football</Link>
      </li>
      <li>
        <Link to="/articles?topic=cooking">cooking</Link>
      </li>
      <li>
        <Link to="/topics">more</Link>
      </li>
      <li className="search">
        <Link to="/articles">
          <img
            src="src/assets/search-icon-2048x2048-cmujl7en.png"
            height="20px"
          />
          search all
        </Link>
      </li>
      {user ? (
        <Link to={`/users/${user.username}`}>
          {" "}
          <li>profile</li>
        </Link>
      ) : (
        <li>
          <Login></Login>
        </li>
      )}
    </ul>
  );
}
