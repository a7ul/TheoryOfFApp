import React, { Component } from 'react';
import Loader from '../../components/Loader';
import FUImage from '../../components/FUImage';
import ActionContainer from '../../components/ActionContainer';
import { getRandomImageUrl } from '../../util';
import ErrorView from '../../components/ErrorView';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isLoading: false,
    fakeIsLoading: true,
    imageUrl: null,
    error: null,
  }
  componentDidMount() {
    this.setRandomImage();
  }

  onError = (err) => {
    this.setState((prevState) => ({
      ...prevState, error: err, fakeIsLoading: false, isLoading: false,
    }));
  }

  setImage = (url) => {
    this.setState((prevState) => ({
      ...prevState,
      imageUrl: url,
      fakeIsLoading: true,
      error: false,
    }));
    setTimeout(() => this.setState((prevState) => ({ ...prevState, fakeIsLoading: false })), 2000);
  }

  setRandomImage = async () => {
    try {
      const randomUrl = await getRandomImageUrl();
      this.setImage(randomUrl);
    } catch (err) {
      this.onError(err);
    }
  }

  setLoading = (isLoading) => {
    this.setState((prevState) => ({ ...prevState, isLoading }));
  }

  render() {
    const {
      imageUrl, isLoading, fakeIsLoading, error,
    } = this.state;
    const augmentedIsLoading = isLoading || fakeIsLoading;
    return (
      [
        <Loader key="loader_screen" isLoading={augmentedIsLoading} >
          {
            !error
          ? <FUImage
            setLoading={this.setLoading}
            imageUrl={imageUrl}
            onError={this.onError}
          />
          : <ErrorView />
          }
        </Loader>,
        <ActionContainer key="action_panel" imageUrl={imageUrl} reload={this.setRandomImage} isLoading={augmentedIsLoading} />,
      ]
    );
  }
}
