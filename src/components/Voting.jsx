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
          onClick={() => {
            handleVote(1);
          }}
        >
          {currentVote === 1 ? (
            <img src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/thumbsupclicked.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy90aHVtYnN1cGNsaWNrZWQud2VicCIsImlhdCI6MTc0ODE5NzY5NywiZXhwIjoxNzc5NzMzNjk3fQ.ZVnkayGCQadyZIKejh3TJ_Hy-ULAzbniu3vRGktlTu0" />
          ) : (
            <img src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/thumbsup.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy90aHVtYnN1cC53ZWJwIiwiaWF0IjoxNzQ4MTk3NzQ0LCJleHAiOjE3Nzk3MzM3NDR9.GImSiGL5AUpj_TNUdcLu9laJ_zpXtKuo9Si50bhQ9Jc" />
          )}
        </button>
        <p>{votes}</p>
        <button
          onClick={() => {
            handleVote(-1);
          }}
        >
          {currentVote === -1 ? (
            <img src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/thumbsdownClicked.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy90aHVtYnNkb3duQ2xpY2tlZC53ZWJwIiwiaWF0IjoxNzQ4MTk3ODM3LCJleHAiOjE3Nzk3MzM4Mzd9.XV4QAfgW8OIN0YtviabHSrQ6Cqq1SPuzhGdYGj6kWsk" />
          ) : (
            <img src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/thumbsdown.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy90aHVtYnNkb3duLndlYnAiLCJpYXQiOjE3NDgxOTc4MTMsImV4cCI6MTc3OTczMzgxM30.BycLrWUTK--A0bYyXYrxD1aAnz7RfCR16Dey_fwGRCs" />
          )}
        </button>
      </div>
    </>
  );
}
