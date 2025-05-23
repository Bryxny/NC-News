import { fetchTopics } from "../utils/api";
import { Link } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";
import styles from "../styles/Articles.module.css";

export default function Topics() {
  const { data: topics, loading, error } = useDataFetch(fetchTopics);

  if (loading) return <p>loading...</p>;
  if (error) return <p>no articles found</p>;

  return (
    <>
      <h2 className={styles.header}>All Topics</h2>
      <ul className={styles.topicList}>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
              <li className={styles.topicCard}>
                <div className={styles.topicText}>
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
