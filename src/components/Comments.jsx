import CommentCard from "./CommentCard";
import { useState } from "react";

export default function Comments({
  count,
  comments,
  loading,
  updateComments,
  setShowComments,
  showComments,
}) {
  if (!count) return <p>no comments</p>;
  if (loading) return <p>Loading comments...</p>;

  return (
    <>
      <p>{count} comments</p>
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
    </>
  );
}
