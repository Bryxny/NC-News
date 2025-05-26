import dayjs from "dayjs";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/api";
import styles from "../styles/Comments.module.css";

export default function CommentCard({ comment, updateComments }) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setLoading(false);
        updateComments();
      })
      .catch(() => {
        return <p>something went wrong</p>;
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.commentCard}>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes} votes </p>
      <p>{dayjs(comment.created_at).format("M/D/YYYY h:mm A")}</p>
      {user && user.username === comment.author ? (
        <button onClick={handleDelete} disabled={loading}>
          delete comment
        </button>
      ) : null}
    </div>
  );
}
