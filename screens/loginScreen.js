import React, { Component } from 'react';

import {
  Modal,
  StyleSheet,
  Switch,
  Text,
  StatusBar,
  TouchableHighlight,
  View,
   AsyncStorage
} from 'react-native';

import {
  FontAwesome,
  Ionicons
} from '@exponent/vector-icons';


export default class loginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true,
    }
  }
  
  componentDidMount() {    
}

async _SetLogin(visible) {
    try {
     await AsyncStorage.setItem('@isLoggedIn:key', 'June');
      } catch (error) {
      // Error saving data
    } finally {
      this.setState({ modalVisible: visible });
      this.props.navigator.push('home');
    }
    
  }

 _setModalVisible = (visible) => {
    this._SetLogin(visible)
    };  


  render() {
    return (
      <Modal
        animationType={'none'}
        visible={this.state.modalVisible}
        supportedOrientations={ ['portrait']}
        >
      <View
        style={styles.container}>
        <View
          style={styles.buttonArea}>
            <Text
               style={styles.buttonHeader}>
              Please Login</Text>
          <Button
              style={styles.buttonText}
                onPress={this._setModalVisible.bind(this, false)}
              >
             <FontAwesome name="facebook-f" size={32} color="white" />
             <Text>
                FaceBook
              </Text>  
            </Button>
        </View>  
        </View>
      </Modal>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(106, 215, 248, 1)",
    justifyContent: 'center',
     flexDirection: 'row', 

  },
  button: {
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "rgba(255, 255, 255, 0)",
    justifyContent: 'center',
    backgroundColor: "rgb(28, 28, 222)",
    width: 100,
  },
  buttonText: {
    margin: 5, 
  },
  modalButton: {
    marginTop: 10,
  },
  buttonArea: {
     flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHeader: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25
  }
});


class Button extends React.Component {
  state = {
    active: false,
  };

  _onHighlight = () => {
    this.setState({active: true});
  };

  _onUnhighlight = () => {
    this.setState({active: false});
  };

  render() {
    var colorStyle = {
      color: this.state.active ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}