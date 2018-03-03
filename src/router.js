import { StackNavigator } from 'react-navigation';
import HomeScreen from './pages/Home';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default RootStack;

