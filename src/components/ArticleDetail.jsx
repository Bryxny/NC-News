import dayjs from "dayjs";
import Voting from "./Voting";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { deleteArticle } from "../utils/api";
import { useNavigate } from "react-router";
import styles from "../styles/Articles.module.css";

export default function ArticleDetail({ article }) {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    setLoading(true);
    deleteArticle(article.article_id)
      .then(() => {
        navigate("/articles");
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong ): please try again");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className={styles.detailCard}>
        <p className={styles.detailSubheader}>Written by {article.author}</p>
        <h2 className={styles.detailHeader}>{article.title}</h2>
        <p className={styles.detailSubheader}>
          {dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}
        </p>
        <img src={article.article_img_url}></img>
        <p className={styles.detailBody}>{article.body}</p>
        <Voting article={article} />
        {user && user.username === article.author ? (
          <button
            className="delete-button"
            onClick={handleDelete}
            disabled={loading}
          >
            delete article
          </button>
        ) : null}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
