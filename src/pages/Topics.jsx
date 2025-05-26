import { fetchTopics } from "../utils/api";
import { Link } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";
import styles from "../styles/Topics.module.css";

export default function Topics() {
  const { data: topics, loading, error } = useDataFetch(fetchTopics);

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
      <h2 className="header">All Topics</h2>
      <ul className={styles.topicList}>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
              <li className={styles.topicCard}>
                <div className={styles.topicText}>
                  <h3>{topic.slug}</h3>
                </div>
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
