import { useParams } from "react-router";
import ArticleDetail from "../components/ArticleDetail";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchArticles } from "../utils/api.js";

export default function Article() {
  const { article_id } = useParams();
  const {
    data: article,
    loading,
    error,
  } = useDataFetch(fetchArticles, { article_id });

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return <ArticleDetail article={article} />;
}
