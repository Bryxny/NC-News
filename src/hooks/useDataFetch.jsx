import { useState, useEffect } from "react";

export function useDataFetch(fetchFunction, queryparams) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchFunction(queryparams)
      .then((response) => {
        if (!response) setError(true);
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [JSON.stringify(queryparams)]);

  return { data, loading, error };
}
