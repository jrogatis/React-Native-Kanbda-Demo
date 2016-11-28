import {
  createRouter,
} from '@exponent/ex-navigation';
import VenueScreen from '../screens/VenueScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';


export default createRouter(() => ({
  home: () => HomeScreen,
  venue: () => VenueScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation
 
}));
