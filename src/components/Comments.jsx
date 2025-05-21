import { fetchComments } from "../utils/FetchData";
import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";

export default function Comments({ count, comments, loading }) {
  if (!count) return <p>no comments</p>;
  if (loading) return <p>Loading comments...</p>;

  const [showComments, setShowComments] = useState(false);

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
