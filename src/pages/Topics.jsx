import { fetchTopics } from "../utils/api";
import { Link } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";

export default function Topics() {
  const { data: topics, loading, error } = useDataFetch(fetchTopics);

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return (
    <>
      <h1>topics</h1>
      <ul className="topic-list">
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
              <li className="topic-card">
                <div className="topic-text">
                  <h3>{topic.slug}</h3>
                  <p>{topic.description}</p>
                </div>{" "}
                <img
                  src={
                    topic.img_url ||
                    `https://placehold.co/600x400?text=${topic.slug}`
                  }
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
