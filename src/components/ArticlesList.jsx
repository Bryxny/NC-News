import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  console.log(articles);
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
