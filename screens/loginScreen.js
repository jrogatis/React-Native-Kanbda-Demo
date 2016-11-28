import React, { Component } from 'react';

import {
  Modal,
  StyleSheet,
  Switch,
  Text,
  StatusBar,
  TouchableHighlight,
  View
} from 'react-native';

import {
  FontAwesome,
  Ionicons
} from '@exponent/vector-icons';


export default class loginScreen extends Component {
  
  render() {
    return (
      <Modal
        animationType={'none'}
        visible={true}
        supportedOrientations={ ['portrait']}
        >
      <View
        style={styles.container}>
        <View
          style={styles.buttonArea}>
            <Text
               style={styles.buttonHeader}>
              >Please Login</Text>
          <Button
            style={styles.modalButton}>
             <FontAwesome name="facebook-f" size={32} color="white" />
            <Text> FaceBook </Text>  
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
    backgroundColor: "rgb(116, 116, 124)",
    justifyContent: 'center',
     flexDirection: 'row', 

  },
  button: {
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "rgba(255, 255, 255, 0)",
    justifyContent: 'center',
    backgroundColor: "rgb(28, 28, 222)"
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
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
    color : "rgba(255, 255, 255, 1)"
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
      color: this.state.active ? '#fff' : '#000',
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