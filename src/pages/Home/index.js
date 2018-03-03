import React, { Component } from 'react';
import Loader from '../../components/Loader';
import FUImage from '../../components/FUImage';
import ActionContainer from '../../components/ActionContainer';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isLoading: false,
    fakeIsLoading: false,
    imageUrl: null,
  }
  setLoading = (isLoading) => {
    this.setState((prevState) => ({ ...prevState, isLoading }));
  }
  setImage = (url) => {
    this.setState((prevState) => ({
      ...prevState,
      imageUrl: url,
      fakeIsLoading: true,
    }));
    setTimeout(() => this.setState((prevState) => ({ ...prevState, fakeIsLoading: false })), 1000);
  }
  render() {
    const { imageUrl, isLoading, fakeIsLoading } = this.state;
    const augmentedIsLoading = isLoading || fakeIsLoading;
    return (
      [
        <Loader key="loader_screen" isLoading={augmentedIsLoading} >
          <FUImage setLoading={this.setLoading} imageUrl={imageUrl} />
        </Loader>,
        <ActionContainer key="action_panel" reload={this.setImage} />,
      ]
    );
  }
}
