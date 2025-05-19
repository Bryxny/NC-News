import { Link } from "react-router";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/topics">topics placeholder</Link>
      </li>
      <li>
        <Link to="/articles">
          <img
            src="src/assets/search-icon-2048x2048-cmujl7en.png"
            width="20"
            height="20"
          />
        </Link>
      </li>
    </ul>
  );
}
