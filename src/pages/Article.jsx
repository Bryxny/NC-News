import { useParams } from "react-router";
import ArticleDetail from "../components/ArticleDetail";
import { useDataFetch } from "../hooks/useDataFetch";
import { fetchArticles } from "../utils/api.js";
import Comments from "../components/Comments.jsx";

export default function Article() {
  const { article_id } = useParams();
  const {
    data: article,
    loading,
    error,
  } = useDataFetch(fetchArticles, { article_id });

  if (loading)
    return (
      <img
        className="loading"
        src="https://ddduwcteueqxpgcqosmk.supabase.co/storage/v1/object/sign/icons/Animation%20-%201748184453857%20(1).gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzkyN2QxZWZiLWE3OWUtNDg1Ny04ODNmLTRjMTAwM2I4MmJhZCJ9.eyJ1cmwiOiJpY29ucy9BbmltYXRpb24gLSAxNzQ4MTg0NDUzODU3ICgxKS5naWYiLCJpYXQiOjE3NDgxODUyMDUsImV4cCI6MTc3OTcyMTIwNX0.u8nxQm0uDj7AKYJafQhtR31aY7Ehszwka9IFQEzy30E"
      />
    );
  if (error) return <p>error loading article</p>;

  return (
    <>
      <ArticleDetail article={article} />
      <div className="comment-box">
        <Comments article_id={article_id} />
      </div>
    </>
  );
}
