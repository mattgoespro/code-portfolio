import { css } from '@emotion/react';
import React from 'react';
import { PulseLoader } from 'react-spinners';

export function getLoader(loading: boolean) {
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
