import dayjs from "dayjs";
import Comments from "./Comments";
import Voting from "./Voting";
import PostComment from "./PostComment";
import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useDataFetch } from "../hooks/useDataFetch";

export default function ArticleDetail({ article }) {
  const [showComments, setShowComments] = useState(false);
  const {
    data: comments,
    loading,
    error,
    refetch,
  } = useDataFetch(fetchComments, {
    limit: 1000,
    article_id: article.article_id,
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  const updateComments = () => {
    refetch();
  };

  return (
    <>
      <div className="article-detail">
        <h2>{article.title}</h2>
        <p className="article-body">written by {article.author}</p>
        <p className="article-body">
          {dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}
        </p>
        <img src={article.article_img_url}></img>
        <p className="article-body">{article.body}</p>
        <Voting article={article} />
      </div>
      <div className="comment-box">
        <div className="comment-section">
          <PostComment updateComments={updateComments} />
          <Comments
            comments={comments}
            count={comments.length}
            loading={loading}
            updateComments={updateComments}
            showComments={showComments}
            setShowComments={setShowComments}
          />
        </div>
      </div>
    </>
  );
}
