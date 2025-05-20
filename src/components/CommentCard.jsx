import dayjs from "dayjs";

export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes} votes </p>
      <p>{dayjs(comment.created_at).format("M/D/YYYY h:mm A")}</p>
    </div>
  );
}
