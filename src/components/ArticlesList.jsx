import { Link } from "react-router";
import dayjs from "dayjs";

export default function ArticlesList({ articles }) {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        const article_id = article.article_id;
        return (
          <Link key={article_id} to={`/articles/${article_id}`}>
            <li className="article-card">
              <div className="article-text">
                <p>{article.topic}</p>
                <h3>{article.title}</h3>
                <p>{dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}</p>
                <p>
                  {article.comment_count} comments {article.votes} votes
                </p>
              </div>
              <img src={article.article_img_url} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
