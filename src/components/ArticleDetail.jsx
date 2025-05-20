import dayjs from "dayjs";

export default function ArticleDetail({ article }) {
  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>written by {article.author}</p>
      <p>{dayjs(article.created_at).format("MMMM D, YYYY h:mm A")}</p>
      <img src={article.article_img_url}></img>
      <p>{article.body}</p>
      <p>votes bar placeholder</p>
      <p>comments placeholder</p>
    </div>
  );
}
