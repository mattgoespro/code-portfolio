import Spinner from '../spinner/Spinner';
import LoadingOverlay from 'react-loading-overlay-ts';

interface SpinnerOverlayProps {
  visible: boolean;
  spinnerColor: string;
}

function SpinnerLoadingOverlay(props: SpinnerOverlayProps) {
  return (
    <LoadingOverlay
      active={props.visible}
      spinner={<Spinner color={props.spinnerColor} />}
      styles={{
        wrapper: () => {
          return {
            background: 'rgba(89, 89, 89, 0.2)'
          };
        },
        content: () => {
          return {
            position: 'fixed',
            top: '50%',
            left: '50%'
          };
        }
      }}
    />
  );
}

export default SpinnerLoadingOverlay;
