import Spinner from '../spinner/Spinner';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@shared/redux/store';

class SpinnerLoadingOverlay extends Component<{ visible?: boolean }> {
  render() {
    const { visible } = this.props;

    if (!visible) {
      return <></>;
    }

    return (
      <LoadingOverlay
        active={true}
        spinner={<Spinner color="white" />}
        styles={{
          wrapper: () => {
            return {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: 1000
            };
          },
          content: () => {
            return {
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: '50'
            };
          }
        }}
      />
    );
  }
}

export default connect((state: RootState) => ({ visible: state.loadingOverlay.visible }))(
  SpinnerLoadingOverlay
);
