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
    const { imageUrl } = this.props;
    return (
      <styles.FUImageContainer>
        <Banner source={{ uri: imageUrl }} onLoadStart={this.onLoadStart} onLoadEnd={this.onLoadEnd} />
      </styles.FUImageContainer>
    );
  }
}
FUImage.defaultProps = {
  imageUrl: null,
  setLoading: () => {},
};
FUImage.propTypes = {
  imageUrl: PropTypes.string,
  setLoading: PropTypes.func,
};
export default FUImage;
