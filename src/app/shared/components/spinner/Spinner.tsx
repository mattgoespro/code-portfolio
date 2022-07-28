import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <FadeLoader
      color="orange"
      loading={true}
      speedMultiplier={1}
      width={5}
      height={10}
      radius={1}
    />
  );
};

export default Spinner;
