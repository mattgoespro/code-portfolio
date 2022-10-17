import { FadeLoader } from 'react-spinners';

export const Spinner = (props: { color: string }) => {
  return (
    <FadeLoader
      color={props.color || 'orange'}
      loading={true}
      speedMultiplier={1}
      width={5}
      height={10}
      radius={1}
    />
  );
};
