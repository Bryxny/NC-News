import { fetchComments } from "../utils/FetchData";
import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";

export default function Comments({ count, article_id }) {
  if (!count) return <p>no comments</p>;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {showComments ? (
        <>
          <button
            onClick={() => {
              setShowComments(false);
            }}
          >
            Hide Comments
          </button>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </>
      ) : (
        <button
          onClick={() => {
            setShowComments(true);
          }}
        >
          Show All Comments
        </button>
      )}
    </>
  );
}
