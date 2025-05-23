import { useState } from "react";
import { fetchTopics } from "../utils/api";
import { useDataFetch } from "../hooks/useDataFetch";
import { postArticle } from "../utils/api";
import styles from "../styles/Articles.module.css";

export default function PostArticle({ author, refetch }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newArticle, setNewArticle] = useState({
    author: author,
    topic: "coding",
  });
  const {
    data: topics,
    laoding: topicLoading,
    error: topicError,
  } = useDataFetch(fetchTopics);

  if (loading || topicLoading) return <p>loading...</p>;
  if (topicError) return <p>error loading</p>;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewArticle((article) => ({ ...article, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.body) {
      return setError("article must contain a title and body");
    }
    setLoading(true);
    postArticle(newArticle)
      .then(() => {
        setLoading(false);
        setNewArticle({
          author: author,
          topic: "coding",
        });
        refetch();
        setError("");
      })
      .catch(() => {
        setError("something went wrong ): please try again");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <h3 className={styles.header}>Post New Article</h3>
      <form className={styles.postArticle} onSubmit={handleSubmit}>
        <label>
          Topic:{" "}
          <select name="topic" onChange={handleChange}>
            {topics.map((topic) => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newArticle.title || ""}
          ></input>
        </label>
        <label htmlFor="body">
          Body:
          <input
            type="text"
            name="body"
            onChange={handleChange}
            value={newArticle.body || ""}
          ></input>
        </label>

        <label htmlFor="article_img_url">
          Image Url:
          <input
            type="text"
            name="article_img_url"
            onChange={handleChange}
            value={newArticle.article_img_url || ""}
          ></input>
        </label>
        <button className="submit" disabled={loading}>
          Post article
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
}
