import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useApiCall<T extends object>(
  endpoint: string,
  onLoadEnd?: (data: T) => void,
  loadImmediate?: boolean
): [T, boolean, Dispatch<SetStateAction<boolean>>, boolean] {
  const [fetchingData, setFetchingData] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    if (!loadImmediate && !fetchingData) {
      return;
    }

    const abortController = new AbortController();

    axios
      .get<T>(endpoint, { signal: abortController.signal })
      .then((resp) => {
        setData(resp.data);

        if (onLoadEnd) {
          onLoadEnd(resp.data);
        }

        setError(false);
      })
      .catch(() => {
        setError(true);

        if (onLoadEnd) {
          onLoadEnd(null);
        }

        setData(null);
      });

    return () => {
      abortController.abort();
    };
  }, [fetchingData]);

  return [data, fetchingData, setFetchingData, error];
}
