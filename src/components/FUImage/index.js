import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import Banner from '../../components/Banner';

const FUImage = () => {
  const t = 1;
  return (
    <styles.FUImageContainer>
      <Banner source={{ uri: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/237/609/3e9.gif' }} />
    </styles.FUImageContainer>
  );
};
FUImage.defaultProps = {
};
FUImage.propTypes = {
};
export default FUImage;
