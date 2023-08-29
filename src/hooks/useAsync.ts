import { useEffect, useState } from "react";

function useAsync<T>({
  fn,
  deps = [],
}: {
  fn: () => Promise<T>;
  deps?: any[];
}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      return;
    }

    const promise = fn();

    setLoading(true);

    promise
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, deps);

  return { data, error, loading };
}

export { useAsync };
