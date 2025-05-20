import { patchArticleVote } from "../utils/FetchData";
import { useState } from "react";
export default function Voting({ article }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(article.votes);
  const [voteValue, setVoteValue] = useState(0);

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
        <button
          onClick={() => {
            handleVote(1);
          }}
        >
          upvote
        </button>
        <button
          onClick={() => {
            handleVote(-1);
          }}
        >
          downvote
        </button>
      </div>
      {hasVoted ? <p>voted!</p> : null}
    </>
  );
}
