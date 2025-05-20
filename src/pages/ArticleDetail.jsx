import { fetchArticle } from "../utils/FetchData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import dayjs from "dayjs";

export default function ArticleDetail() {
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
        <div className="article-detail">
          <h2>{article.title}</h2>
          <p>written by {article.author}</p>
          <p>{dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}</p>
          <img src={article.article_img_url}></img>
          <p>{article.body}</p>
          <p>votes bar placeholder</p>
          <p>comments placeholder</p>
        </div>
      )}
    </>
  );
}
