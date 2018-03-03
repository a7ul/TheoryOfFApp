/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Loader from '../../components/Loader';
import FUImage from '../../components/FUImage';
import RightTitleBtn from '../../components/RightTitleBtn';

export default class Home extends Component {
  static navigationOptions = {
    title: '🖕',
    headerTransparent: true,
    headerRight: <RightTitleBtn />,
  };
  state = {
    isLoading: false,
  }
  render() {
    return (
      <Loader isLoading={this.state.isLoading} >
        <FUImage />
      </Loader>
    );
  }
}
