import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';

export function getSpinner(loading: boolean) {
  return (
    <PulseLoader
      color="#0018ed"
      loading={loading}
      css={css`
        margin-top: 10px;
      `}
      size={15}
    />
  );
}
