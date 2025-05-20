import { Link } from "react-router";
import dayjs from "dayjs";

export default function ArticleCard({ article }) {
  const article_id = article.article_id;
  return (
    <Link to={`/articles/${article_id}`}>
      <li className="article-card">
        <div className="article-text">
          <p>{article.topic}</p>
          <h3>{article.title}</h3>
          <p>{dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}</p>
        </div>
        <img src={article.article_img_url} />
      </li>
    </Link>
  );
}
