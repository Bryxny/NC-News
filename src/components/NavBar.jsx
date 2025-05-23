import { useLocation } from "react-router";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);
  const currentTopic = currentParams.get("topic");
  const path = location.pathname;

  const { user } = useContext(UserContext);

  return (
    <ul className={styles.navBar}>
      <div className={styles.left}>
        <li className={styles.navItem}>
          <NavLink to="/">
            <img
              src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/NCLogo.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9OQ0xvZ28ud2VicCIsImlhdCI6MTc0ODAxNjA4NywiZXhwIjoxNzc5NTUyMDg3fQ.ZphqJTN6xv5qFoBOjjxjIZrlg32bWjISNnc_e_8d9EY"
              className={`${styles.logo}`}
            />
          </NavLink>
        </li>
      </div>
      <div className={styles.center}>
        <li
          className={`${styles.navItem} ${styles.hideOnSmall} ${styles.link} ${
            currentTopic === "coding" ? styles.active : ""
          }`}
        >
          <NavLink to="/articles?topic=coding">Coding</NavLink>
        </li>
        <li
          className={`${styles.navItem} ${styles.hideOnSmall} ${styles.link} ${
            currentTopic === "football" ? styles.active : ""
          }`}
        >
          <NavLink to="/articles?topic=football">Football</NavLink>
        </li>
        <li
          className={`${styles.navItem} ${styles.hideOnSmall} ${styles.link} ${
            currentTopic === "cooking" ? styles.active : ""
          }`}
        >
          <NavLink to="/articles?topic=cooking">Cooking</NavLink>
        </li>
        <li
          className={`${styles.navItem} ${styles.hideOnSmall} ${styles.link} ${
            path === "/topics" ? styles.active : ""
          }`}
        >
          <NavLink to="/topics">More</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/articles" className={styles.link}>
            <img
              src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/search-icon-2048x2048-cmujl7en.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9zZWFyY2gtaWNvbi0yMDQ4eDIwNDgtY211amw3ZW4ucG5nIiwiaWF0IjoxNzQ4MDE2MTA5LCJleHAiOjE3Nzk1NTIxMDl9.UJj6nZL_fm0HYGimG-nKhbk2W_oMSALzTHVVlfLsQ-M"
              className={styles.img}
            />
          </NavLink>
        </li>
      </div>
      <div className={styles.right}>
        <li className={styles.navItem}>
          {user ? (
            <NavLink to={`/users/${user.username}`} className={styles.link}>
              <img src={user.avatar_url} className={styles.icon} />
            </NavLink>
          ) : (
            <Login />
          )}
        </li>
      </div>
    </ul>
  );
}
