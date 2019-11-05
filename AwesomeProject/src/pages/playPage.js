'use strict';
import React, { Component } from 'react'
import { Text, StyleSheet, View,Button, AlertIOS,Dimensions,TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import VideoPlayer from 'react-native-video-controls';
export default class playPage extends Component {
    static options(passProps){
       return {
        topBar: {
            visible: false,
            leftButtonColor:'#ffffff',
            title:{
                text:passProps.data.group_title
						},
						leftButtons:[
							{
								id:'paly_back_button',
								// icon: require('icon.png'),
								text:'返回',
								enabled:true,
								color:'white',
								disabledColor:'white',
							}
						]
					},
					bottomTabs:{
						visible: false,
						animate: true 
					}
       } 
    };
    constructor(props){
				super(props);
				this.state = {
					rate: 1,
					volume: 1,
					muted: false,
					resizeMode: 'contain',
					duration: 0.0,
					currentTime: 0.0,
					controls: false,
					paused: false,
					skin: 'custom',
					ignoreSilentSwitch: null,
					isBuffering: false,
					filterEnabled: true
				};
				Navigation.events().bindComponent(this);
				// VideoPlayer.events().bindComponent(this);
				// this.onLayout = this.onLayout.bind(this);
				// this.onBackBack = this.onBackBack.bind(this);
      };
		componentDidAppear(){
			Navigation.mergeOptions(this.props.componentId, {
				topBar: {
					visible: false
				}
			});
		};
		navigationButtonPressed({ buttonId }) {
			if(buttonId == 'paly_back_button'){
				Navigation.pop(this.props.componentId);
			}
		}
    render() {
			//http://pili-live-hdl.qhmywl.com/dsdtv/4677cf6625ce01b236bbb58f99094d51.flv
			//http://ivi.bupt.edu.cn/hls/chchd.m3u8
			return (
				<View style={styles.root_content}>
					<VideoPlayer
						ref={(ref)=> {this.player = ref}}
						source={{ uri: this.props.data.live }}
						onEnterFullscreen={this.onEnterFullscreen.bind(this)}
						onExitFullscreen={this.onExitFullscreen.bind(this)}
						onError={(error)=>this.onError(error)}
						onPause={this.onPause.bind(this)}
						onPlay={this.onPlay.bind(this)}
						onBack={this.onBack.bind(this)}
						onEnd={this.onEnd.bind(this)}
					/>
				</View>
			)
		};
		onEnterFullscreen(){
			// alert('onEnterFullscreen');
		};
		onExitFullscreen(){
			// alert('onExitFullscreen');
		};
		onError(error){
			/*
				{
					error:{
						code:
						domain:
					}
					target:3823
				}
			*/
			alert(error.error.domain+':'+error.error.code+':'+error.target);
		};
		onPause(){
			// alert(this.player);
		};
		onPlay(){
			// alert('onPlay');
		};
		onBack(){
			Navigation.pop(this.props.componentId);
		};
		onEnd(){
			// alert('onEnd');
		};

		// resizeVideoPlayer() {
		// 	// Always in 16 /9 aspect ratio
		// 	let {width, height} = Dimensions.get('window');
		// 	if (Util.isPortrait()) {
		// 		this.setState({
		// 			orientationWidth: width * 0.8,
		// 			orientationHeight: width * 0.8 * 0.56,
		// 		});
		// 	} else {
		// 		this.setState({
		// 			orientationHeight: height * 0.8,
		// 			orientationWidth: height * 0.8 * 1.77
		// 		});
		// 	}
		// }
		// onLayout(e) {
		// 	console.log('on layout called');
		// 	this.resizeVideoPlayer();
		// };
		// fullScreenOnPress() {
		// 	if (this.videoPlayer!=null)
		// 		this.videoPlayer.presentFullscreenPlayer();
		// }
		// onLoad(data) {
		// 	console.log('On load fired!');
		// 	this.setState({duration: data.duration});
		// }
	
		// onProgress(data) {
		// 	this.setState({currentTime: data.currentTime});
		// }
	
		// onBuffer({ isBuffering }: { isBuffering: boolean }) {
		// 	this.setState({ isBuffering });
		// }
	
		// getCurrentTimePercentage() {
		// 	if (this.state.currentTime > 0) {
		// 		return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
		// 	} else {
		// 		return 0;
		// 	}
		// }
	
		// setFilter(step) {
		// 	let index = filterTypes.indexOf(this.state.filter) + step;
	
		// 	if (index === filterTypes.length) {
		// 		index = 0;
		// 	} else if (index === -1) {
		// 		index = filterTypes.length - 1;
		// 	}
	
		// 	this.setState({
		// 		filter: filterTypes[index]
		// 	})
		// }
	
		// renderSkinControl(skin) {
		// 	const isSelected = this.state.skin == skin;
		// 	const selectControls = skin == 'native' || skin == 'embed';
		// 	return (
		// 		<TouchableOpacity onPress={() => { this.setState({
		// 				controls: selectControls,
		// 				skin: skin
		// 			}) }}>
		// 			<Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
		// 				{skin}
		// 			</Text>
		// 		</TouchableOpacity>
		// 	);
		// }
	
		// renderRateControl(rate) {
		// 	const isSelected = (this.state.rate == rate);
	
		// 	return (
		// 		<TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
		// 			<Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
		// 				{rate}x
		// 			</Text>
		// 		</TouchableOpacity>
		// 	)
		// }
	
		// renderResizeModeControl(resizeMode) {
		// 	const isSelected = (this.state.resizeMode == resizeMode);
	
		// 	return (
		// 		<TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
		// 			<Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
		// 				{resizeMode}
		// 			</Text>
		// 		</TouchableOpacity>
		// 	)
		// }
	
		// renderVolumeControl(volume) {
		// 	const isSelected = (this.state.volume == volume);
	
		// 	return (
		// 		<TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
		// 			<Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
		// 				{volume * 100}%
		// 			</Text>
		// 		</TouchableOpacity>
		// 	)
		// }
	
		// renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
		// 	const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);
	
		// 	return (
		// 		<TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
		// 			<Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
		// 				{ignoreSilentSwitch}
		// 			</Text>
		// 		</TouchableOpacity>
		// 	)
		// }
	
		// renderCustomSkin() {
		// 	const flexCompleted = this.getCurrentTimePercentage() * 100;
		// 	const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
	
		// 	return (
		// 		<View style={styles.container} onLayout={()=>this.onLayout}>
		// 			<TouchableOpacity activeOpacity={1} style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
		// 				<Video
		// 					source={{uri: 'http://ivi.bupt.edu.cn/hls/chchd.m3u8'}}
		// 					style={styles.fullScreen}
		// 					rate={this.state.rate}
		// 					paused={this.state.paused}
		// 					volume={this.state.volume}
		// 					muted={this.state.muted}
		// 					ignoreSilentSwitch={this.state.ignoreSilentSwitch}
		// 					resizeMode={this.state.resizeMode}
		// 					onLoad={()=>this.onLoad}
		// 					onBuffer={()=>this.onBuffer}
		// 					onProgress={()=>this.onProgress}
		// 					onEnd={() => { AlertIOS.alert('Done!') }}
		// 					repeat={true}
		// 					filter={this.state.filter}
		// 					filterEnabled={this.state.filterEnabled}
		// 					ref={p => { this.videoPlayer = p;}}
		// 				/>
		// 			</TouchableOpacity>
	
		// 			<View style={styles.controls}>
		// 				<View style={styles.generalControls}>
		// 					<View style={styles.skinControl}>
		// 						{this.renderSkinControl('custom')}
		// 						{this.renderSkinControl('native')}
		// 						{this.renderSkinControl('embed')}
		// 					</View>
		// 					{
		// 						(this.state.filterEnabled) ?
		// 								<View style={styles.skinControl}>
		// 									<TouchableOpacity onPress={() => {
		// 										this.setFilter(-1)
		// 									}}>
		// 										<Text style={styles.controlOption}>Previous Filter</Text>
		// 									</TouchableOpacity>
		// 									<TouchableOpacity onPress={() => {
		// 										this.setFilter(1)
		// 									}}>
		// 										<Text style={styles.controlOption}>Next Filter</Text>
		// 									</TouchableOpacity>
		// 									{/* <Button title="full screen" onPress={()=> this.fullScreenOnPress(this) }></Button> */}
		// 								</View> : null
		// 					}
		// 				</View>
		// 				<View style={styles.generalControls}>
		// 					<View style={styles.rateControl}>
		// 						{this.renderRateControl(0.5)}
		// 						{this.renderRateControl(1.0)}
		// 						{this.renderRateControl(2.0)}
		// 					</View>
	
		// 					<View style={styles.volumeControl}>
		// 						{this.renderVolumeControl(0.5)}
		// 						{this.renderVolumeControl(1)}
		// 						{this.renderVolumeControl(1.5)}
		// 					</View>
	
		// 					<View style={styles.resizeModeControl}>
		// 						{this.renderResizeModeControl('cover')}
		// 						{this.renderResizeModeControl('contain')}
		// 						{this.renderResizeModeControl('stretch')}
		// 					</View>
		// 				</View>
		// 				<View style={styles.generalControls}>
		// 					{
		// 						(Platform.OS === 'ios') ?
		// 							<View style={styles.ignoreSilentSwitchControl}>
		// 								{this.renderIgnoreSilentSwitchControl('ignore')}
		// 								{this.renderIgnoreSilentSwitchControl('obey')}
		// 							</View> : null
		// 					}
		// 				</View>
	
		// 				<View style={styles.trackingControls}>
		// 					<View style={styles.progress}>
		// 						<View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
		// 						<View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
		// 					</View>
		// 				</View>
		// 			</View>
		// 		</View>
		// 	);
		// }
	
		// renderNativeSkin() {
		// 	const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
		// 	return (
		// 		<View style={styles.container}>
		// 			<View style={styles.fullScreen}>
		// 				<Video
		// 					source={{uri: 'http://ivi.bupt.edu.cn/hls/chchd.m3u8'}}
		// 					style={videoStyle}
		// 					rate={this.state.rate}
		// 					paused={this.state.paused}
		// 					volume={this.state.volume}
		// 					muted={this.state.muted}
		// 					ignoreSilentSwitch={this.state.ignoreSilentSwitch}
		// 					resizeMode={this.state.resizeMode}
		// 					onLoad={()=>this.onLoad}
		// 					onBuffer={()=>this.onBuffer}
		// 					onProgress={()=>this.onProgress}
		// 					onEnd={() => { AlertIOS.alert('Done!') }}
		// 					repeat={true}
		// 					controls={this.state.controls}
		// 					filter={this.state.filter}
		// 					filterEnabled={this.state.filterEnabled}
		// 				/>
		// 			</View>
		// 			<View style={styles.controls}>
		// 				<View style={styles.generalControls}>
		// 					<View style={styles.skinControl}>
		// 						{this.renderSkinControl('custom')}
		// 						{this.renderSkinControl('native')}
		// 						{this.renderSkinControl('embed')}
		// 					</View>
		// 					{
		// 						(this.state.filterEnabled) ?
		// 								<View style={styles.skinControl}>
		// 									<TouchableOpacity onPress={() => {
		// 										this.setFilter(-1)
		// 									}}>
		// 										<Text style={styles.controlOption}>Previous Filter</Text>
		// 									</TouchableOpacity>
		// 									<TouchableOpacity onPress={() => {
		// 										this.setFilter(1)
		// 									}}>
		// 										<Text style={styles.controlOption}>Next Filter</Text>
		// 									</TouchableOpacity>
		// 								</View> : null
		// 					}
		// 				</View>
		// 				<View style={styles.generalControls}>
		// 					<View style={styles.rateControl}>
		// 						{this.renderRateControl(0.5)}
		// 						{this.renderRateControl(1.0)}
		// 						{this.renderRateControl(2.0)}
		// 					</View>
	
		// 					<View style={styles.volumeControl}>
		// 						{this.renderVolumeControl(0.5)}
		// 						{this.renderVolumeControl(1)}
		// 						{this.renderVolumeControl(1.5)}
		// 					</View>
	
		// 					<View style={styles.resizeModeControl}>
		// 						{this.renderResizeModeControl('cover')}
		// 						{this.renderResizeModeControl('contain')}
		// 						{this.renderResizeModeControl('stretch')}
		// 					</View>
		// 				</View>
		// 				<View style={styles.generalControls}>
		// 					{
		// 						(Platform.OS === 'ios') ?
		// 							<View style={styles.ignoreSilentSwitchControl}>
		// 								{this.renderIgnoreSilentSwitchControl('ignore')}
		// 								{this.renderIgnoreSilentSwitchControl('obey')}
		// 							</View> : null
		// 					}
		// 				</View>
		// 			</View>
	
		// 		</View>
		// 	);
		// }
}

const styles = StyleSheet.create({
		root_content: {
			flex:1,
			alignItems: 'center',
			justifyContent:'center',
		},
		backgroundVideo: {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			backgroundColor: 'black',
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'black',
		},
		fullScreen: {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
		controls: {
			backgroundColor: "transparent",
			borderRadius: 5,
			position: 'absolute',
			bottom: 44,
			left: 4,
			right: 4,
		},
		progress: {
			flex: 1,
			flexDirection: 'row',
			borderRadius: 3,
			overflow: 'hidden',
		},
		innerProgressCompleted: {
			height: 20,
			backgroundColor: '#cccccc',
		},
		innerProgressRemaining: {
			height: 20,
			backgroundColor: '#2C2C2C',
		},
		generalControls: {
			flex: 1,
			flexDirection: 'row',
			overflow: 'hidden',
			paddingBottom: 10,
		},
		skinControl: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
		},
		rateControl: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
		},
		volumeControl: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
		},
		resizeModeControl: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		ignoreSilentSwitchControl: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		controlOption: {
			alignSelf: 'center',
			fontSize: 11,
			color: "white",
			paddingLeft: 2,
			paddingRight: 2,
			lineHeight: 12,
		},
		nativeVideoControls: {
			top: 184,
			height: 300
		}
})
