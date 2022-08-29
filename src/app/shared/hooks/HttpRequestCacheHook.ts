import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

type HTTPRequestStatus = 'Idle' | 'Executing' | 'Complete';

interface HTTPRequestState<T> {
  status: HTTPRequestStatus;
  data?: T;
  error?: boolean;
}

type ClientActionType = 'REQUESTED' | 'RECEIVED' | 'FAILED';

interface ClientEvent<T> {
  type: ClientActionType;
  data?: T;
}

export default function useHttpRequest<T>(url: string) {
  const dataCache = useRef({});

  const initialState: HTTPRequestState<T> = {
    status: 'Idle',
    data: null,
    error: false
  };

  const [state, dispatchEvent] = useReducer(
    (state: HTTPRequestState<T>, action: ClientEvent<T>): HTTPRequestState<T> => {
      switch (action.type) {
        case 'REQUESTED':
          return { ...initialState, status: 'Executing' };
        case 'RECEIVED':
          return { ...initialState, status: 'Complete', data: action.data, error: false };
        case 'FAILED':
          return { ...initialState, status: 'Idle', error: true };
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
        type: 'REQUESTED'
      });

      if (dataCache.current[url]) {
        const data = dataCache.current[url];
        dispatchEvent({
          type: 'RECEIVED',
          data
        });
      } else {
        axios
          .get<T>(url)
          .then((resp) => {
            dataCache.current[url] = resp.data;

            if (cancelRequest) return;

            dispatchEvent({
              type: 'RECEIVED',
              data: resp.data
            });
          })
          .catch(() =>
            dispatchEvent({
              type: 'FAILED',
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

  return { status: state.status, data: state.data };
}
