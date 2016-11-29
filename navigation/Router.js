import {
  createRouter,
} from '@exponent/ex-navigation';
import VenueScreen from '../screens/VenueScreen';
import loginScreen from '../screens/loginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';


export default createRouter(() => ({
  venue: () => VenueScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  loginScreen: () => loginScreen,
}));
