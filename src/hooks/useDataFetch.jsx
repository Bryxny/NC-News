import { useState, useEffect } from "react";

export function useDataFetch(fetchFunction, queryparams) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = () => {
    setLoading(true);
    setError(false);
    fetchFunction(queryparams)
      .then((response) => {
        if (!response) setError(true);
        setData(response);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(queryparams)]);

  return { data, loading, error, refetch: fetchData };
}
