import { useDataFetch } from "../hooks/useDataFetch";
import ArticlesList from "../components/ArticlesList";
import { fetchArticles } from "../utils/FetchData";

export default function Home() {
  const {
    data: articles,
    loading,
    error,
  } = useDataFetch(fetchArticles, { limit: 4 });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <h1>Recent Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
}
