import { Link } from "react-router";
import dayjs from "dayjs";
import styles from "../styles/Articles.module.css";

export default function ArticlesList({ articles }) {
  return (
    <ul className={styles.list}>
      {articles.map((article) => {
        const article_id = article.article_id;
        return (
          <Link key={article_id} to={`/articles/${article_id}`}>
            <li className={styles.card}>
              <div className={styles.left}>
                <p>{article.topic}</p>
                <h3>{article.title}</h3>
                <p>{dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}</p>
                <p>
                  {article.comment_count} comments {article.votes} votes
                </p>
              </div>
              <img className={styles.right} src={article.article_img_url} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
