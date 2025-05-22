import { patchArticleVote } from "../utils/api";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
export default function Voting({ article }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(article.votes);
  const [voteValue, setVoteValue] = useState(0);
  const { user } = useContext(UserContext);

  function handleVote(vote) {
    if (!hasVoted) {
      setHasVoted(true);
      patchArticleVote(article.article_id, vote);
      setVotes(votes + vote);
      setVoteValue(vote);
    } else if (vote === voteValue) {
      setHasVoted(false);
      patchArticleVote(article.article_id, -vote);
      setVotes(votes - vote);
      setVoteValue(0);
    } else {
      setVotes(votes + 2 * vote);
      setVoteValue(vote);
      patchArticleVote(article.article_id, 2 * vote);
    }
  }
  return (
    <>
      <div className="votes-box">
        <p>{votes} votes</p>
        {!user ? (
          <p>sign in to vote</p>
        ) : (
          <div className="votes-box">
            <button
              className={voteValue === 1 ? "clicked" : "unclicked"}
              onClick={() => {
                handleVote(1);
              }}
            >
              upvote
            </button>
            <button
              className={voteValue === -1 ? "clicked" : "unclicked"}
              onClick={() => {
                handleVote(-1);
              }}
            >
              downvote
            </button>
            {hasVoted && <p className="voted">voted!</p>}
          </div>
        )}
      </div>
    </>
  );
}
