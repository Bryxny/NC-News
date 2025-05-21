import { useArticles } from "../hooks/useArticles";
import ArticlesList from "../components/ArticlesList";

export default function Articles() {
  const { articles, loading } = useArticles({});

  return (
    <>
      <h1>Articles</h1>
      {loading ? <p>loading</p> : <ArticlesList articles={articles} />}
    </>
  );
}
