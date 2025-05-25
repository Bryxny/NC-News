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

  if (loading)
    return (
      <img
        className="loading"
        src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/Animation%20-%201748184453857%20(1).gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9BbmltYXRpb24gLSAxNzQ4MTg0NDUzODU3ICgxKS5naWYiLCJpYXQiOjE3NDgxODUyMDUsImV4cCI6MTc3OTcyMTIwNX0.u8nxQm0uDj7AKYJafQhtR31aY7Ehszwka9IFQEzy30E"
      />
    );
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
