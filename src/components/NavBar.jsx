import { Link } from "react-router";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/topics">topics placeholder</Link>
      </li>
      <li>
        <Link to="/articles">
          view all
          {/* {"   "}
          <img
            src="src/assets/search-icon-2048x2048-cmujl7en.png"
            width="20"
            height="20"
          /> */}
        </Link>
      </li>
      {user ? (
        <li>profile</li>
      ) : (
        <li>
          <Login></Login>
        </li>
      )}
    </ul>
  );
}
