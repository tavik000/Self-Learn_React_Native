// Exported from snack.expo.io
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Pic extends Component {
  constructor(props) {
    super(props);
    this.state = { uri:true }
    this._onPressButton = this._onPressButton.bind(this)
    
  }
  
  _onPressButton() {
    // Alert.alert('You tapped the button!')
   this.setState(previousState => {return { uri: !previousState.uri }});

  }

  render() {
    let uri = this.state.uri ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcp3XhVl2JCBsIsaWHu5EFZr7ULpSo_-acu-GBccVCt6Xou6k6A' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wy4MBrjm_enzPUmX7jAdPwHE7xmxByZJeDWOW-iofWUjrZCx'
    return (
     
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View>
                <Image source={{uri}} style={[styles.pic, styles.button]} />
          </View>
        </TouchableHighlight>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Pic/>
          <Pic/>
          <Pic/>
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Pic/>
          <Pic/>
          <Pic/>
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <Pic/>
          <Pic/>
          <Pic/>
        </View>
      </View>
    );
  }
}












const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
flexDirection: 'row',
 alignItems: 'center'
   
    // justifyContent: 'center'
  },
  pic: {
    width: 100, 
    height: 100
  },
  boxOne: {
    flex: 1,
 justifyContent: 'space-around', // main axis
    backgroundColor: '#FFEE04',
    // justifyContent: 'space-around',
   
  },
  boxTwo: {
    flex: 1,
    justifyContent: 'space-around', // main axis
    backgroundColor: '#0FFFFF'
  },
  boxThree: {
    flex: 1,
    
    justifyContent: 'space-around', // main axis
    // alignItems: 'flex-end', // cross axis
    backgroundColor: '#2F00CA',
  },
  
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Main);