import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  AsyncStorage
} from 'react-native';

import {
  Notifications,
} from 'exponent';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
  createRouter
} from '@exponent/ex-navigation';

import {
  FontAwesome,
} from '@exponent/vector-icons';


import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Router from '../navigation/Router';


const globals = require('../globals');

const ICON_SIZE = 24;

export default class RootNavigation extends React.Component {
   constructor(props) {
    super(props);
  }


  _openLoginPage() {
    let route = {
        name: 'loginScreen',
        title: 'Login',
        modalVisible: true
      }; 
    this.props.navigator.push(Router.getRoute('loginScreen', route));    
  }

  _renderIcon(name, isSelected) {
      return (
        <FontAwesome
          name={name}
          size={32}
          color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
  }
  
  componentWillMount() {
     if (this.props.logedIn !== true) {
        console.log('componentWillMount sem a key', this.props.logedIn)
        this._openLoginPage()
    }  
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications(); 
  }
  
  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    const RouteParam = {
      logedIn: this.props.logedIn
      }
      return (
        <TabNavigation
          tabBarHeight={56}
          initialTab="home">
          <TabNavigationItem
            title="Home"
            id="home"
            renderIcon={() => <Image source={require('./../assets/images/schedule-icon.png')} />} >
            <StackNavigation
              initialRoute={Router.getRoute('home', RouteParam)} />
          </TabNavigationItem>

          <TabNavigationItem
            title="Venue"
            id="venue"
            renderIcon={() => <Image source={require('./../assets/images/venue-icon.png')} />} >
            <StackNavigation initialRoute="venue" />
          </TabNavigationItem>

          <TabNavigationItem
            title="Tweets"
            id="settings"
            renderIcon={() => <Image source={require('./../assets/images/tweets-icon.png')} />} >
            <StackNavigation initialRoute="settings" />
          </TabNavigationItem>
        </TabNavigation>
      );
  }

  

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({origin, data}) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  }
}

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: globals.colors.primary,
    height: 64
  },
  navBarText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: (Platform.OS === 'ios') ? 12 : 24
  },
  navBarTitleContainer: {
    alignSelf: 'center',
    paddingRight: (Platform.OS === 'ios') ? 0 : 74
  },
  navBarTitleText: {
    textAlign: 'center'
  },
  navBarLeftButton: {
    paddingLeft: 10,
    marginTop: (Platform.OS === 'ios') ? 0 : 8
  },
  navBarRightButton: {
    paddingRight: 10,
  },
    icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain'
  }
});
