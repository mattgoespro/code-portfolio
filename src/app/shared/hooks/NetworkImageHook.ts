import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useNetworkImage(url: string) {
  const [img, setImg] = useState('');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    axios
      .get(url, {
        responseType: 'blob'
      })
      .then((resp) => {
        setFetching(false);
        setImg(URL.createObjectURL(resp.data));
      })
      .catch(() => setFetching(false));
  }, []);

  return { fetching, img };
}
