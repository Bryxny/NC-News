import dayjs from "dayjs";
import { Link } from "react-router";

export default function ArticleCard({ article }) {
  const articleid = article.article_id;
  return (
    <Link to={`/articles/${articleid}`}>
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
