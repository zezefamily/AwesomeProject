/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import OnePage from './OnePage'
// import TwoPage from './TwoPage'
// import ThreePage from './ThreePage'
// import {name as appName} from './app.json';
import HomePage from './src/pages/homePage'
import PlayPage from './src/pages/playPage'
import ChannelPage from './src/pages/channelPage'
import MyPage from './src/pages/myPage'

// AppRegistry.registerComponent(appName, () => App);
// Navigation.registerComponent(appName, () => App);
// Navigation.registerComponent('OnePage', ()=> OnePage);
// Navigation.registerComponent('TwoPage', ()=> TwoPage);
// Navigation.registerComponent('ThreePage', ()=> ThreePage);
Navigation.registerComponent('HomePage',() => HomePage);
Navigation.registerComponent('ChannelPage',() => ChannelPage);
Navigation.registerComponent('PlayPage',() => PlayPage);
Navigation.registerComponent('MyPage',() => MyPage);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'light' | 'dark',
    },
    topBar: {
      visible: true,
      background: {
        color: '#1296db',
      },
      title: {
        text: 'Title',
        fontSize: 15,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
        component: {
          alignment: 'center'
        }
      }
      
    },
    layout: {
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      backgroundColor: 'white',
      orientation: ['portrait', 'landscape'] // An array of supported orientations
    },
    bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: 'alwaysShow' // Sets the title state for each tab.
      }
  });
    Navigation.setRoot({
        root: {
            bottomTabs: {
                currentTabIndex: 0,
                id:'bottomBar',
                children:[
                    {
                        stack: {
                            children:[
                                {
                                    component:{
                                        name:'HomePage',
                                        passProps: {
                                            text: 'This IS Tab 1'
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text:'探索',
                                    textID:'tab_explore',
                                    icon: {
                                        uri: 'tab_export_default',
                                        scale: 3
                                    },
                                    selectedIconColor: '#1296db',
                                    textColor: '#8a8a8a',
                                    selectedTextColor: '#1296db',
                                    selectedIcon: {
                                        uri: 'tab_export_selected',
                                        scale: 3
                                    },
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children:[
                                {
                                    component:{
                                        name:'ChannelPage',
                                        passProps: {
                                            text: 'This IS Tab 2'
                                        }
                                    }
                                }, //0
                            ],
                            options: {
                                bottomTab: {
                                    text:'频道',
                                    textID:'XXXX2',
                                    icon: {
                                        uri: 'tab_channel_default',
                                        scale: 3
                                    },
                                    selectedIconColor: '#1296db',
                                    textColor: '#8a8a8a',
                                    selectedTextColor: '#1296db',
                                    selectedIcon: {
                                        uri: 'tab_channel_selected',
                                        scale: 3
                                    },
                                },
                            }
                        }
                    },
                ]
            }
        }
    });
});
// Navigation.setDefaultOptions({
//   topBar: {
//     visible: true,
//     background: {
//       color: 'red'
//     }
//   }
// });
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       bottomTabs:custombottomTabs,
//     }
//   });
// });
// const custombottomTabs = {
//   children: [
//     {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'OnePage',
//               options: {
//                 bottomTab: {
//                   text: 'Tab 1',
//                   icon: {
//                     uri:''
//                   }
//                 }
//               }
//             }
//           }
//         ],
//         options: {
//           bottomTab: {
//             text: 'Tab 1',
//             icon: {
//               uri:''
//             }
//           }
//         }
//       }
//     },
//     {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'TwoPage',
//               options: {
//                 bottomTab: {
//                   text: 'Tab 1',
//                   icon: {
//                     uri:''
//                   }
//                 }
//               }
//             }
//           }
//         ],
//         options: {
//           bottomTab: {
//             text: 'Tab 1',
//             icon: {
//               uri:''
//             }
//           }
//         }
//       }
//     },
//   ],
//   options: {}
// };

// Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//       root: {
//         bottomTabs: {
//           children: [
//             {
//               stack: {
//                 children: [
//                   {
//                     component: {
//                       name: 'OnePage',
//                     }
//                   }
//                 ],
//                 options: {
//                   bottomTab: {
//                     text: 'Tab 1',
//                   }
//                 }
//               }
//             },
//             {
//               stack: {
//                 children: [
//                   {
//                     component: {
//                       name: 'TwoPage',
//                     }
//                   }
//                 ],
//                 options: {
//                   bottomTab: {
//                     text: 'Tab 2',
//                   }
//                 }
//               }
//             },
//             {
//               stack: {
//                 children: [
//                   {
//                     component: {
//                       name: 'ThreePage',
//                     }
//                   }
//                 ],
//                 options: {
//                   bottomTab: {
//                     text: 'Tab 3',
//                   }
//                 }
//               }
//             }
//           ],
//         },
//       }
//     });
//   });
