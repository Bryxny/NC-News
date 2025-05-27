import dayjs from "dayjs";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment, fetchUser } from "../utils/api";
import styles from "../styles/Comments.module.css";
import Voting from "./Voting";

export default function CommentCard({ comment, updateComments }) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [commenter, setCommenter] = useState("");
  useEffect(() => {
    fetchUser({ username: comment.author }).then((user) => {
      setCommenter(user.avatar_url);
    });
  }, []);

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
      <div className={styles.commentTop}>
        <img className={styles.commenter} src={commenter} />
        <p>{comment.author}</p>
      </div>
      <p>{comment.body}</p>
      <div className={styles.commentBottom}>
        <Voting article={comment} />
        <p>{dayjs(comment.created_at).format("M/D/YYYY h:mm A")}</p>
        {user && user.username === comment.author ? (
          <button onClick={handleDelete} disabled={loading}>
            delete comment
          </button>
        ) : null}
      </div>
    </div>
  );
}
