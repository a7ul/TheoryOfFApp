import { StackNavigator } from 'react-navigation';
import HomeScreen from './pages/Home';
import StoryScreen from './pages/Story';

const RootStack = StackNavigator({
  Story: {
    screen: StoryScreen,
  },
  Home: {
    screen: HomeScreen,
  },
});

export default RootStack;

