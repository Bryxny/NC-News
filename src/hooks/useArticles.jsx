import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/FetchData";

export function useArticles(queryparams) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(queryparams).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [JSON.stringify(queryparams)]);

  return { articles, loading };
}
