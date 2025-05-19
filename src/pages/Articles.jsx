import { fetchArticles } from "../utils/FetchData";
import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}
