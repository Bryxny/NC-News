import { useDataFetch } from "../hooks/useDataFetch";
import ArticlesList from "../components/ArticlesList";
import { useSearchParams } from "react-router";
import { useState } from "react";
import { fetchArticles } from "../utils/api.js";
import styles from "../styles/Articles.module.css";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order_by") || "desc";
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev.entries());
      params[e.target.name] = e.target.value;
      return params;
    });
  };

  const { data, loading, error } = useDataFetch(fetchArticles, {
    topic,
    sort_by: sortBy,
    order_by: orderBy,
    limit: 1000,
  });

  const articles = searchTerm
    ? (data || []).filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return (
    <>
      {topic ? (
        <h2 className={styles.header}>
          {topic[0].toUpperCase() + topic.slice(1)}
        </h2>
      ) : (
        <h2 className={styles.header}> All Articles</h2>
      )}
      <div className={styles.filter}>
        <label>
          search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onSubmit={handleChange}
          />
        </label>
        <label>
          sort by:
          <select name="sort_by" value={sortBy} onChange={handleChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          order by:
          <select name="order_by" value={orderBy} onChange={handleChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ArticlesList articles={articles} />
    </>
  );
}
