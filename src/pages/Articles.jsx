import { useDataFetch } from "../hooks/useDataFetch";
import ArticlesList from "../components/ArticlesList";
import { useSearchParams } from "react-router";
import { fetchArticles } from "../utils/api.js";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order_by") || "desc";

  const handleChange = (e) => {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev.entries());
      params[e.target.name] = e.target.value;
      return params;
    });
  };

  const {
    data: articles,
    loading,
    error,
  } = useDataFetch(fetchArticles, {
    topic,
    sort_by: sortBy,
    order_by: orderBy,
    limit: 1000,
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return (
    <>
      {topic ? <h1>articles about {topic}</h1> : <h1>Articles</h1>}
      <div className="filter">
        <label>
          sort by{" "}
          <select name="sort_by" value={sortBy} onChange={handleChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          order by
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
