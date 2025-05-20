import dayjs from "dayjs";

export default function ArticleCard({ article }) {
  const date = dayjs(article.created_at).format("MMMM D, YYYY h:mm A");
  return (
    <li className="article-card">
      <div className="article-text">
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{date}</p>
      </div>
      <img src={article.article_img_url} />
    </li>
  );
}
