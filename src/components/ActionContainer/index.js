import React from 'react';
import { Share, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './style';

const onShare = () => {
  Share.share({
    message: 'BAM: we\'re helping your business with awesome React Native apps',
    url: 'http://bam.tech',
    title: 'Wow, did you see that?',
  }, {
    // Android only:
    dialogTitle: 'No fucks to Share',
  });
};

class ActionContainer extends React.PureComponent {
  render() {
    return (
      <styles.Container>
        <TouchableOpacity onPress={() => this.props.reload('https://media.giphy.com/media/3oriNS5VULj8Ndn0TS/giphy.gif')}>
          <styles.ActionIcon name="rotate-cw" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}><styles.ActionIcon name="share-2" /></TouchableOpacity>
      </styles.Container>
    );
  }
}

ActionContainer.defaultProps = {
  reload: () => {},
};
ActionContainer.propTypes = {
  reload: PropTypes.func,
};
export default ActionContainer;
