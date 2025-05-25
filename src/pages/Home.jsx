import { useDataFetch } from "../hooks/useDataFetch";
import ArticlesList from "../components/ArticlesList";
import { fetchArticles, fetchUsers } from "../utils/api.js";
import { Link } from "react-router";
import styles from "../styles/Articles.module.css";

export default function Home() {
  const {
    data: articles,
    loading: articleLoading,
    error: articleError,
  } = useDataFetch(fetchArticles, { limit: 4 });

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useDataFetch(fetchUsers, { limit: 40 });

  if (articleLoading || usersLoading)
    return (
      <img
        className="loading"
        src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/Animation%20-%201748184453857%20(1).gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9BbmltYXRpb24gLSAxNzQ4MTg0NDUzODU3ICgxKS5naWYiLCJpYXQiOjE3NDgxODUyMDUsImV4cCI6MTc3OTcyMTIwNX0.u8nxQm0uDj7AKYJafQhtR31aY7Ehszwka9IFQEzy30E"
      />
    );
  if (articleError || usersError) return <p>error</p>;

  return (
    <>
      <h2 className={styles.header}>Recent Articles</h2>
      <ArticlesList articles={articles} />
      <h2 className={styles.header}>Our Writers</h2>
      <ul className={styles.writers}>
        {users.map((user) => {
          return (
            <Link to={`users/${user.username}`} key={user.username}>
              <li>
                <img src={user.avatar_url} />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
