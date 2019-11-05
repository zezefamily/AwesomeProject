import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList,TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import ChannelList from '../../liveResource.json';
export default class myPage extends Component {
  static options(passProps){
    return {
      topBar: {
        title: {
          text: '频道',
          drawBehind: true,
            visible: false,
            animate: false
        }
      }
    }
  };
  constructor(props){
    super(props);
    //类似于设置delegate = self?????
    Navigation.events().bindComponent(this);
    this.state = {
        channelList: ChannelList,
        loaded:false
    };
  };
  componentDidMount(){

  };
  componentDidAppear(){

  };
  render() {
    return (
      <View>
        <FlatList
            data={this.state.channelList}
            renderItem={(item,index)=> this.renderCell(item,index)}
            keyExtractor={(item,index)=> index+'' }
            numColumns={2}
        ></FlatList>
      </View>
    )
  };
  
  /**
  |--------------------------------------------------
  | 自定义 VideoCell
  | ES5 onPress={this._xxxFunction.bind(params)}
  | ES6 onPress={(callback_params)=> this._xxxFunction(params)}
  |--------------------------------------------------
  */
  renderCell({item,index}){
      return(
        <TouchableOpacity style={styles.cell_style} activeOpacity={1} onPress={()=> {this._cellDidSelected(item,index)}}>
          <View style={styles.cell_content}>
            <Text style={styles.cell_title}>
                {item.group_title}
            </Text>
          </View>
        </TouchableOpacity>
      );
  };
  /**
  |--------------------------------------------------
  | cell点击事件
  |--------------------------------------------------
  */
  _cellDidSelected(item,index){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'PlayPage',
        passProps: { //传参
          data: item
        }
      }
    });
  }
}

const styles = StyleSheet.create({
    content:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    cell_style:{
      flex:1, // 空间平均分布
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'steelblue',
      height: 60,
      margin: 5,
      borderRadius: 5
    },
    cell_content:{

    },
    cell_title:{
      fontSize:16,
      fontWeight:'bold',
      color:'white'
    }

    
})
