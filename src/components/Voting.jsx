import { patchArticleVote } from "../utils/api";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import styles from "../styles/Articles.module.css";
export default function Voting({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [currentVote, setCurrentVote] = useState(0);
  const { user } = useContext(UserContext);

  function handleVote(voteToAdd) {
    const isSameVote = voteToAdd === currentVote;
    const voteChange = isSameVote ? -currentVote : voteToAdd - currentVote;

    setCurrentVote(isSameVote ? 0 : voteToAdd);
    setVotes(votes + voteChange);
    patchArticleVote(article.article_id, voteChange);
  }

  if (!user) return <p>{votes} votes - sign in to vote</p>;
  return (
    <>
      <div className={styles.voteBox}>
        <button
          className={currentVote === 1 ? styles.clicked : styles.unclicked}
          onClick={() => {
            handleVote(1);
          }}
        >
          upvote
        </button>
        <button
          className={currentVote === -1 ? styles.clicked : styles.unclicked}
          onClick={() => {
            handleVote(-1);
          }}
        >
          downvote
        </button>
        {currentVote ? <p className="voted">voted!</p> : null}{" "}
        <p>{votes} votes</p>
      </div>
    </>
  );
}
