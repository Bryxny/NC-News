import { useParams } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchUser, fetchArticles } from "../utils/api";
import ArticlesList from "../components/ArticlesList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import PostArticle from "../components/PostArticle";

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
    <div className="profile">
      <h1>{user.username}'s profile</h1>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} />
      {currentUser && currentUser.username === user.username && (
        <PostArticle author={currentUser.username} refetch={refetch} />
      )}
      <h2>Written by {user.username} </h2>
      <ArticlesList
        className="profile-articles"
        articles={articles}
      ></ArticlesList>
    </div>
  );
}
