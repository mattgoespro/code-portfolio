import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';

export function getSpinner(loading: boolean) {
  return (
    <FadeLoader
      color="#919191"
      loading={loading}
      speedMultiplier={1.5}
      css={css`
        transform: scale(0.7);
      `}
    />
  );
}
