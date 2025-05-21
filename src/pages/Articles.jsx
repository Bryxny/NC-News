import { useArticles } from "../hooks/useArticles";
import ArticlesList from "../components/ArticlesList";
import { useSearchParams } from "react-router";

export default function Articles() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const { articles, loading, error } = useArticles({ topic });

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return (
    <>
      {topic ? <h1>articles about {topic}</h1> : <h1>Articles</h1>}
      <ArticlesList articles={articles} />
    </>
  );
}
