import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './style';

class ActionContainer extends React.PureComponent {
  onShare = () => {
    Share.share({
      message: this.props.imageUrl,
    }).catch(err => console.log(err));
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
