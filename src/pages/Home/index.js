import React, { Component } from 'react';
import Loader from '../../components/Loader';
import FUImage from '../../components/FUImage';
import ActionContainer from '../../components/ActionContainer';
import { getRandomImage } from '../../util';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isLoading: false,
    fakeIsLoading: false,
    imageUrl: null,
  }
  componentDidMount() {
    this.setRandomImage();
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
    setTimeout(() => this.setState((prevState) => ({ ...prevState, fakeIsLoading: false })), 2000);
  }

  setRandomImage = () => {
    getRandomImage().then((randomUrl) => {
      this.setImage(randomUrl);
    });
  }

  render() {
    const { imageUrl, isLoading, fakeIsLoading } = this.state;
    const augmentedIsLoading = isLoading || fakeIsLoading;
    return (
      [
        <Loader key="loader_screen" isLoading={augmentedIsLoading} >
          <FUImage
            setLoading={this.setLoading}
            imageUrl={imageUrl}
          />
        </Loader>,
        <ActionContainer key="action_panel" imageUrl={imageUrl} reload={this.setRandomImage} isLoading={augmentedIsLoading} />,
      ]
    );
  }
}
