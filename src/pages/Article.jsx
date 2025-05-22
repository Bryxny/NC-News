import { useParams } from "react-router";
import ArticleDetail from "../components/ArticleDetail";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchArticles } from "../utils/api.js";
import Comments from "../components/Comments.jsx";
import { useEffect } from "react";

export default function Article() {
  const { article_id } = useParams();
  const {
    data: article,
    loading,
    error,
  } = useDataFetch(fetchArticles, { article_id });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error loading article</p>;

  return (
    <>
      <ArticleDetail article={article} />
      <div className="comment-box">
        <Comments article_id={article_id} />
      </div>
    </>
  );
}
