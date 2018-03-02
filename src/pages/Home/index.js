/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '🖕',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  render() {
    return (
      <View><Text>Hello123</Text></View>
    );
  }
}
