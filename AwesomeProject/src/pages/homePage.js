import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class homePage extends Component {
  static options(passProps){
    return {
      topBar: {
        title: {
          text: '探索',
          drawBehind: true,
          visible: false,
          animate: false
        }
      }
    }
  };
  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet'
    };
  };
  /*
    They are implemented by iOS's viewDidAppear/viewDidDisappear
    Android's ViewTreeObserver visibility detection
  */
  componentDidAppear(){
    this.setState({text:'componentDidAppear'});
  };
  componentDidDisAppear(){
    // alert('componentDidDisAppear');
  };
  componentWillUnmount(){
    
  };

  _buttonClicked(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'PlayPage',
        passProps: {
          text: 'Pushed screen',
          data: {name:'zeze',age:23}
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.content}>
        <Text> Home Page {this.state.text}  </Text>
        <View><Button title="Touch Me" onPress={this._buttonClicked.bind(this)} /></View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
