import { FadeLoader } from 'react-spinners';
import './Spinner.scss';

interface SpinnerProps {
  loading: boolean;
  foreground?: boolean;
}

export function Spinner(props: SpinnerProps) {
  return (
    <div className="spinner">
      <FadeLoader
        color="#919191"
        loading={props.loading}
        speedMultiplier={1.5}
        width={10}
        height={10}
        radius={5}
      />
    </div>
  );
}
