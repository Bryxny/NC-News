import { UserContext } from "../contexts/UserContext";
import { useState, useContext } from "react";
import { postComment } from "../utils/FetchData";
import { useParams } from "react-router";

export default function PostComment({ updateComments }) {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return setError("You must be logged in to post a comment");
    if (comment.length <= 10) return setError("10 characters minimum");

    setLoading(true);
    const body = { body: comment, username: user.username };
    postComment(article_id, body)
      .then(() => {
        setComment("");
        setError("");
        updateComments(true);
      })
      .catch(() => {
        return setError("Something went wrong ): please try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment" />
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        disabled={loading}
      ></input>
      <button className="submit" disabled={loading}>
        Post Comment
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
}
