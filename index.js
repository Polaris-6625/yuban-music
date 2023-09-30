/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App)
const option = {
    minBuffer:15,  // 需要缓冲的最短时间（以秒为单位）
    maxBuffer:50,   // 需要缓冲的最长时间（以秒为单位）
    playBuffer:2.5,  // 开始播放需要缓冲的最短时间（以秒为单位）
    backBuffer:0,  // 以秒为单位的时间，应保留在当前播放头时间之后的缓冲区中。
    maxCacheSize:0 
  }
TrackPlayer.setupPlayer(option).then(() => {
    console.log('音频播放器已初始化');
});
