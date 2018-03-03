import PropTypes from 'prop-types';
import React, { Component } from 'react';
import resolveAssetSource from 'resolveAssetSource'; //eslint-disable-line
import { Image, ImageBackground } from 'react-native';
import styles from './style';

class Banner extends Component {
  state = {
    viewWidth: null,
    imageStyle: {},
  }

  componentWillReceiveProps({ source, style }) {
    if (this.props.source !== source) {
      this.calculateStyle(source, this.state.viewWidth, style);
    }
  }

  onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    const { style, source } = this.props;
    this.calculateStyle(source, width, style);
  }

  calculateStyle = (source, viewWidth, style) => {
    if (typeof source === 'object') {
      Image.getSize(source.uri, (width, height) => {
        const imageStyle = { height: (height / width) * viewWidth };
        this.setState({ imageStyle: { ...styles.image, ...imageStyle, ...style }, viewWidth });
      });
    } else {
      const imageProps = resolveAssetSource(source);
      const imageStyle = { height: (imageProps.height / imageProps.width) * viewWidth };
      this.setState({ imageStyle: { ...styles.image, ...imageStyle, ...style }, viewWidth });
    }
  }

  render() {
    const { source, ...extraProps } = this.props;
    const { imageStyle } = this.state;
    return (
      <ImageBackground onLayout={this.onLayout} resizeMode="contain" {...extraProps} getSize={this.calculateStyle} style={imageStyle} source={source}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

Banner.defaultProps = {
  style: {},
  source: 0,
  isBackground: false,
  children: null,
};

Banner.propTypes = {
  style: PropTypes.object,
  source: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  isBackground: PropTypes.bool,
  children: PropTypes.node,
};

export default Banner;
