import { useParams } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchUser, fetchArticles } from "../utils/api";
import ArticlesList from "../components/ArticlesList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import PostArticle from "../components/PostArticle";
import styles from "../styles/Profile.module.css";

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

  if (userLoading || articleLoading)
    return (
      <img
        className="loading"
        src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/Animation%20-%201748184453857%20(1).gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9BbmltYXRpb24gLSAxNzQ4MTg0NDUzODU3ICgxKS5naWYiLCJpYXQiOjE3NDgxODUyMDUsImV4cCI6MTc3OTcyMTIwNX0.u8nxQm0uDj7AKYJafQhtR31aY7Ehszwka9IFQEzy30E"
      />
    );
  if (userError || articleError) return <p>error loading profile</p>;
  return (
    <div className={styles.profile}>
      <h2 className="header">{user.username}'s profile</h2>
      <h3 className="header">{user.name}</h3>
      <img className={styles.profileIcon} src={user.avatar_url} />
      {currentUser && currentUser.username === user.username && (
        <PostArticle author={currentUser.username} refetch={refetch} />
      )}
      <h3 className="header">Written by {user.username} </h3>
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
