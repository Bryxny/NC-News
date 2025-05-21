import { useArticles } from "../hooks/useArticles";
import ArticlesList from "../components/ArticlesList";

export default function Home() {
  const { articles, loading, error } = useArticles({ limit: 4 });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <h1>Recent Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
}
