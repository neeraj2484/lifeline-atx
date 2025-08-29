import { useEffect, useState } from "react";

export function useDebouncedFetch<T>(
  fetchFn: () => Promise<T>,
  deps: any[],
  delay = 500
) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchFn().then(setData).catch(() => {});
    }, delay);

    return () => clearTimeout(handler);
  }, deps);

  return data;
}
