import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import { HttpClientEvent, HttpRequestState } from '@shared';

export default function useHttpFetch<T>(
  url: string,
  transformResponseData?: <V>(respData: T) => V
) {
  const dataCache = useRef({});

  const initialState: HttpRequestState<T> = {
    loading: false,
    data: null
  };

  const [state, dispatchEvent] = useReducer(
    (state: HttpRequestState<T>, event: HttpClientEvent<T>): HttpRequestState<T> => {
      let data = event.data;

      if (transformResponseData != null) {
        data = transformResponseData(data);
      }

      switch (event.action) {
        case 'REQUESTED':
          return { ...initialState, loading: true };
        case 'RECEIVED':
          return { ...initialState, loading: false, data, error: false };
        case 'FAILED':
          return { ...initialState, loading: false, error: true };
        default:
          return state;
      }
    },
    initialState
  );

  useEffect(() => {
    const cancelRequest = false;

    if (!url) return;

    const submitHttpRequest = async () => {
      dispatchEvent({
        action: 'REQUESTED'
      });

      if (dataCache.current[url]) {
        const data = dataCache.current[url];
        dispatchEvent({
          action: 'RECEIVED',
          data
        });
      } else {
        axios
          .get<T>(url)
          .then((resp) => {
            dataCache.current[url] = resp.data;

            if (cancelRequest) return;

            dispatchEvent({
              action: 'RECEIVED',
              data: resp.data
            });
          })
          .catch(() =>
            dispatchEvent({
              action: 'FAILED',
              data: null
            })
          );
      }
    };

    submitHttpRequest();

    return () => {
      if (cancelRequest) return;
    };
  }, [url]);

  return { loading: state.loading, data: state.data };
}
