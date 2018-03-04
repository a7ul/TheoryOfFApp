import React from 'react';
import * as styles from './style';

const ErrorView = () => (
  <styles.ErrorContainer>
    <styles.ErrorText>
      🤷‍♀️ Your network didn't give a fuck !🤷🏻‍♂️
    </styles.ErrorText>
    <styles.ErrorText>
    Try again!
    </styles.ErrorText>
  </styles.ErrorContainer>
);

export default ErrorView;
