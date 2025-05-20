import dayjs from "dayjs";
import Comments from "./Comments";
import Voting from "./Voting";

export default function ArticleDetail({ article }) {
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
          <p>post comment placeholder</p>
          <p>{article.comment_count} comments</p>{" "}
          <Comments
            count={article.comment_count}
            article_id={article.article_id}
          />
        </div>
      </div>
    </>
  );
}
