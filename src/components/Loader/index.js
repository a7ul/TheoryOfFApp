import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import * as styles from './style';

class Loader extends React.Component {
  componentDidMount() {
    Animated.loop(Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
        loop: true,
      },
    )).start();
  }
  spinValue = new Animated.Value(0);

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return this.props.isLoading
      ? (
        <styles.LoaderContainer >
          <styles.LoaderText>Trying to load fucks for you</styles.LoaderText>
          <styles.IconText style={{ transform: [{ rotate: spin }] }} >🖕</styles.IconText>
        </styles.LoaderContainer>
      )
      : this.props.children;
  }
}

Loader.defaultProps = {
  isLoading: false,
  children: null,
};
Loader.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
export default Loader;
