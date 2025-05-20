import { useArticles } from "../components/useArticles";
import ArticlesList from "../components/articlesList";

export default function Home() {
  const { articles, loading } = useArticles({ limit: 4 });

  return (
    <>
      <h1>Recent Articles</h1>
      {loading ? <p>loading</p> : <ArticlesList articles={articles} />}
    </>
  );
}
