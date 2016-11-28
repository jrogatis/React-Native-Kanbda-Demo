import Exponent from 'exponent';
import React from 'react';


import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
  createRouter
} from '@exponent/ex-navigation';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

const ICON_SIZE = 24;

const globals = require('./globals');


class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
    
    
  }


  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });

    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigator: {
    paddingTop: 64
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain'
  }
});

Exponent.registerRootComponent(AppContainer);
