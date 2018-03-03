import React from 'react';
import { Share, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './style';

const onShare = () => {
  Share.share({
    message: 'BAM: we\'re helping your business with awesome React Native apps',
    url: 'http://bam.tech',
    title: 'Wow, did you see that?',
  }, {
    // Android only:
    dialogTitle: 'Share BAM goodness',
    // iOS only:
    excludedActivityTypes: [
      'com.apple.UIKit.activity.PostToTwitter',
    ],
  });
};

const Share = (props) => (
  <styles.ShareContainer>
    <Text>Hi</Text>
  </styles.ShareContainer>
);

Share.defaultProps = {
};
Share.propTypes = {
};
export default Share;
