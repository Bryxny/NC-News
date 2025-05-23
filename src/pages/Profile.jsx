import { useParams } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchUser, fetchArticles } from "../utils/api";
import ArticlesList from "../components/ArticlesList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import PostArticle from "../components/PostArticle";
import styles from "../styles/Articles.module.css";

export default function Profile() {
  const { username } = useParams();
  const { user: currentUser } = useContext(UserContext);

  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useDataFetch(fetchUser, { username });

  const {
    data: articles,
    loading: articleLoading,
    error: articleError,
    refetch,
  } = useDataFetch(fetchArticles, { author: username });

  if (userLoading) return <p>loading...</p>;
  if (userError) return <p>error loading profile</p>;
  return (
    <div className={styles.profile}>
      <h2 className={styles.header}>{user.username}'s profile</h2>
      <h3 className={styles.header}>{user.name}</h3>
      <img className={styles.profileIcon} src={user.avatar_url} />
      {currentUser && currentUser.username === user.username && (
        <PostArticle author={currentUser.username} refetch={refetch} />
      )}
      <h3 className={styles.header}>Written by {user.username} </h3>
      {articles.length === 0 ? (
        <p>nothing here yet...</p>
      ) : (
        <ArticlesList
          className="profile-articles"
          articles={articles}
        ></ArticlesList>
      )}
    </div>
  );
}
