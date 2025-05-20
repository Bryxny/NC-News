import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
}
