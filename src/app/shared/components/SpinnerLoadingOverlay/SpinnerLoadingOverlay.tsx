import LoadingOverlay from 'react-loading-overlay-ts';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@redux/store';
import { Spinner } from '../Spinner/Spinner';

class SpinnerLoadingOverlay extends Component<{ visible?: boolean }> {
  render() {
    const { visible } = this.props;

    if (!visible) {
      return <></>;
    }

    return (
      <LoadingOverlay
        active={true}
        spinner={<Spinner color="#ffffff" />}
        styles={{
          wrapper: () => {
            return {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: 2
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
