/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import Loader from '../../components/Loader';

export default class Home extends Component {
  static navigationOptions = {
    title: '🖕',
    headerTransparent: true,
  };
  state = {
    isLoading: true,
  }
  render() {
    return (
      <Loader isLoading={this.state.isLoading} >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/237/609/3e9.gif' }} />
        </View>
      </Loader>
    );
  }
}
