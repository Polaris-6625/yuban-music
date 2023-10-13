/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux'
import TrackPlayer, { usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player';
import PlayControl from './components/playControl';
import { store } from './store/index';
import Main from './main';
import BottomTabs from './components/bottomTabs';

const App: React.FC = () => {
  // TrackPlayer.setupPlayer().then(() => {
  //   console.log('音频播放器已初始化');
  // });
  // 获取屏幕宽度
  const screenWidth = Dimensions.get('window').width;
  // 获取屏幕高度
  const screenHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    global: {
      width: screenWidth,
      height: screenHeight
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
        <BottomTabs />
      </Provider>
    </NavigationContainer>
  )
}

export default App;
