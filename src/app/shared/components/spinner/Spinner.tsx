import { FadeLoader } from 'react-spinners';

interface SpinnerProps {
  color?: string;
}

export function Spinner(props: SpinnerProps) {
  return (
    <FadeLoader
      color={props.color || '#ffffff'}
      loading={true}
      speedMultiplier={1}
      width={5}
      height={10}
      radius={1}
    />
  );
}
