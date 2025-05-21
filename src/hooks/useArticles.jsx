import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/FetchData";

export function useArticles(queryparams) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticles(queryparams)
      .then((data) => {
        if (!data) setError(true);
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [JSON.stringify(queryparams)]);

  return { articles, loading, error };
}
