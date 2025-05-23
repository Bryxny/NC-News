import CommentCard from "./CommentCard";
import { useState } from "react";
import { fetchComments } from "../utils/api";
import { useDataFetch } from "../hooks/useDataFetch";
import PostComment from "./PostComment";

export default function Comments({ article_id }) {
  const [showComments, setShowComments] = useState(false);
  const {
    data: comments,
    loading,
    error,
    refetch,
  } = useDataFetch(fetchComments, {
    limit: 1000,
    article_id,
  });

  const updateComments = () => {
    refetch();
  };

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>error loading comments...</p>;

  return (
    <div className="comment-section">
      <p>
        {comments.length} {comments.length === 1 ? " comment" : "comments"}
      </p>
      {showComments ? (
        <>
          <PostComment updateComments={updateComments} />
          <button
            onClick={() => {
              setShowComments(false);
            }}
          >
            Hide Comments
          </button>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                updateComments={updateComments}
              />
            );
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
    </div>
  );
}
