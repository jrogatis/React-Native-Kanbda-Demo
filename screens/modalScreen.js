
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

export default class ModalScreen extends Component{
    
  state = {
    animationType: 'fade',
    modalVisible: true,
    transparent: true,
    selectedSupportedOrientation: 0,
    currentOrientation: 'unknown',
  };

 
 _setModalVisible = (visible) => {
     this.setState({modalVisible: visible});
    };  


  render() {

      let modalBackgroundStyle = { backgroundColor: 'rgba(255, 255, 255, 0.8)' };
      let innerContainerTransparentStyle = { backgroundColor: 'rgba(106, 215, 248, 1)', padding: 20 };
      return (
      <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}
          supportedOrientations={ ['portrait']}
          onOrientationChange={evt => this.setState({ currentOrientation: evt.nativeEvent.orientation })}
          >
          <View style={[modalStyles.header]} >
            <FontAwesome style={[modalStyles.iconRows]} name="bars" size={20} color="white" border="0" />  
            <Text style={[modalStyles.headerTextLeft]}>Hi June </Text>  
            <Text style={[modalStyles.headerTextRight]}>mindswarms </Text>  
        </View>    
        <View style={[modalStyles.container, modalBackgroundStyle]}>
          <View style={[modalStyles.innerContainer, innerContainerTransparentStyle]}>
             <Text style={[modalStyles.rowTitle]}>Let's get to know you .{'\n'}Record your profile video</Text>    
             <Text style={[modalStyles.rowSubTitle]}>Before you can apply for studies you {'\n'} need to record a short profile video</Text>  
                <Button
                  onPress={this._setModalVisible.bind(this, false)}
                  style={modalStyles.modalButton}>
                  <Ionicons name="ios-arrow-round-forward-outline" size={32} color="white" />
                </Button>
          </View>
        </View>
      </Modal>
    )  
  }


}


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
        style={[modalStyles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[modalStyles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}


const modalStyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 0,
  },

  header: {
    padding: 30,
    backgroundColor: 'rgba(106, 215, 248, 1)',
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    flexDirection: 'row',
  },
  iconRows: {
    paddingRight: 10
  },
  headerTextLeft: {
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "bold" 
  }, 
  headerTextRight: {
    flex:1,
    textAlign: "right",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "bold" 
  }, 
  innerContainer: {
    borderRadius: 0,
    alignItems: 'center',
  },
  imageContainer2: {
  	height:44,
    width: 128,
    borderRadius: 64
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    fontWeight: '600',
    fontSize: 22,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center"
  },
  rowSubTitle: {
    paddingTop: 10,
    fontWeight: '300',
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center"
  },
  button: {
    borderRadius: 50,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  }
  
});
