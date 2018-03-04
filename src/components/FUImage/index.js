import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import Banner from '../../components/Banner';

class FUImage extends React.PureComponent {
  onLoadStart = () => {
    this.props.setLoading(true);
  }
  onLoadEnd = () => {
    this.props.setLoading(false);
  }
  render() {
    const { imageUrl, onError } = this.props;
    return (
      <styles.FUImageContainer>
        <Banner
          source={{ uri: imageUrl }}
          onLoadStart={this.onLoadStart}
          onLoadEnd={this.onLoadEnd}
          onError={onError}
        />
      </styles.FUImageContainer>
    );
  }
}
FUImage.defaultProps = {
  imageUrl: null,
  setLoading: () => {},
  onError: () => {},
};
FUImage.propTypes = {
  imageUrl: PropTypes.string,
  setLoading: PropTypes.func,
  onError: PropTypes.func,
};
export default FUImage;
