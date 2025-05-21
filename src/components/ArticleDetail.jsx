import dayjs from "dayjs";
import Comments from "./Comments";
import Voting from "./Voting";
import PostComment from "./PostComment";
import { useState, useEffect } from "react";
import { fetchComments } from "../utils/FetchData";

export default function ArticleDetail({ article }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(article.comment_count);

  const updateComments = (newComment = false) => {
    setLoading(true);
    fetchComments(article.article_id).then((response) => {
      setComments(response);
      setLoading(false);
      if (newComment) setCommentCount((prev) => prev + 1);
    });
  };

  useEffect(() => {
    updateComments();
  }, [article.article_id]);

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
            count={commentCount}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
