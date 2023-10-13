/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Profiler, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
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
import Index from './pages/index';
import PlayControl from './components/playControl';
import type { RootState } from './store/index.ts'
import { useSelector, useDispatch } from 'react-redux'
import RootNavigator from './Router';

const Main: React.FC = () => {
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
  const controlStateSlice = useSelector((state: RootState) => state.controlStateSlice.value)
  return (
    <View style={styles.global}>
        <RootNavigator/>
        {
          controlStateSlice && <PlayControl></PlayControl>
        }
    </View>
  )
}

export default Main;
