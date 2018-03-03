import React from 'react';
import { Share, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './style';

class ActionContainer extends React.PureComponent {
  onShare = () => {
    Share.share({
      url: `${this.props.imageUrl}`,
      title: `${this.props.imageUrl}`,
    }, {
      // Android only:
      dialogTitle: 'No fucks to Share',
    });
  };
  render() {
    const { isLoading, reload } = this.props;
    return (
      <styles.Container>
        <TouchableOpacity disabled={isLoading} onPress={reload}>
          <styles.ActionIcon active={!isLoading} name="rotate-cw" />
        </TouchableOpacity>
        <TouchableOpacity disabled={isLoading} onPress={this.onShare}>
          <styles.ActionIcon active={!isLoading} name="share-2" />
        </TouchableOpacity>
      </styles.Container>
    );
  }
}

ActionContainer.defaultProps = {
  reload: () => {},
  isLoading: false,
  imageUrl: null,
};
ActionContainer.propTypes = {
  reload: PropTypes.func,
  isLoading: PropTypes.bool,
  imageUrl: PropTypes.string,
};
export default ActionContainer;
