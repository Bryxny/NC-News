import { fetchArticle } from "../utils/FetchData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ArticleDetail from "../components/ArticleDetail";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id).then((response) => {
      setArticle(response);
      setLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <ArticleDetail setLoading={setLoading} article={article} />
      )}
    </>
  );
}
