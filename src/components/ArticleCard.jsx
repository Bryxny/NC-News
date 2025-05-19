export default function ArticleCard({ article }) {
  console.log(article.img_url);

  const [year, month, day] = article.created_at
    .split("T")
    .slice(0, 1)[0]
    .split("-");

  return (
    <li className="article-card">
      <div className="article-text">
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{`${day}-${month}-${year}`}</p>
      </div>
      <img src={article.article_img_url} />
    </li>
  );
}
