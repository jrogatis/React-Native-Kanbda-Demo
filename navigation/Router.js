import {
  createRouter,
} from '@exponent/ex-navigation';
import VenueScreen from '../screens/VenueScreen';
import loginScreen from '../screens/loginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import HomeScreen from '../screens/HomeScreen';


export default createRouter(() => ({
  venue: () => VenueScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  home: () => HomeScreen,
  loginScreen: () => loginScreen
}));
