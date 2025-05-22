import { useDataFetch } from "../hooks/useDataFetch";
import ArticlesList from "../components/ArticlesList";
import { fetchArticles, fetchUsers } from "../utils/api.js";
import { Link } from "react-router";

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

  if (articleLoading || usersLoading) return <p>loading...</p>;
  if (articleError || usersError) return <p>error</p>;

  return (
    <>
      <h1>Recent Articles</h1>
      <ArticlesList articles={articles} />
      <h2>Our Writers</h2>
      <ul>
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
