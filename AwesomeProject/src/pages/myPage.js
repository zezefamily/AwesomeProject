import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
export default class myPage extends Component {
  static options(passProps){
    return {
      topBar: {
        title: {
          text: 'Personal',
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
  };
  componentDidAppear(){
    // Navigation.mergeOptions('pageMy', {
    //   bottomTab: {
    //     badge: 'New'
    //   }
    // });
  };
  _buttonClicked(){
    alert('touch me');
  };

  render() {
    return (
      <View style={styles.content}>
        <Text>My_Page </Text>
        <Button title="Touch Me" onPress={this._buttonClicked.bind(this)} />
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
