import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

export default class Story extends Component {
  static navigationOptions = {
    header: null,
  };

  introOver = async () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <styles.Container>
        <styles.Title>
            THEORY OF FUCKS
        </styles.Title>
        <styles.Story>
          {
            `
The basic concept is that everyone has a box.
📦
The box contains certain amount of fucks. 
The number of fucks in the box differs from person to person.
Some have more, some have less.

Whats important is that every time you perform a task you use some fucks. If its an irritating task you use more fucks and if its a task that you love you would use very less fucks.
⏳
Now, another thing is that the number of fucks will reduce as the day goes along. So by evening you might end up with less fucks than when you started the day.
The only way to replenish the fucks is to sleep and wake up in the morning or do something that inspires you. In essence, its difficult to replenish. 

The theory states that you have limited amount of fucks. Its upto you who or what you spend it on.
Hence, be mindful and DON'T GIVE A FUCK !!

#🖕
#save_fucks
#help_others
           `
           }
        </styles.Story>
        <styles.Button onPress={this.introOver}>
          <styles.BtnText>
            Give me some fucks!
          </styles.BtnText>
        </styles.Button>
      </styles.Container>
    );
  }
}


Story.propTypes = {
  navigation: PropTypes.object.isRequired,
};

