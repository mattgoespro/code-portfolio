import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';
import './Spinner.scss';

export function getSpinner(loading: boolean, foreground?: boolean) {
  return (
    <div className="spinner" style={{ zIndex: foreground ? 1 : 0 }}>
      <FadeLoader
        color="#919191"
        loading={loading}
        speedMultiplier={1.5}
        css={css`
          transform: scale(0.7);
        `}
      />
    </div>
  );
}
