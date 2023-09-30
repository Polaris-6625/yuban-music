import React from 'react';
import { View , StyleSheet, Image , ScrollView , Dimensions } from 'react-native';
import IndexMenu from '../../components/indexMenu/index';
import IndexTop from '../../components/indexTop/index';
import IndexAddMusic from '../../components/indexAddMusic';
import MusicItem from '../../components/musicItem';
import MusicList from '../../components/musicList';
import EaPopMusicList from '../../components/eaPopMusicList';
import LeaderBoard from '../../components/leaderBoard';
import BqSongList from '../../components/bqSongList';

const Index: React.FC = () => {
    const styles = StyleSheet.create({
        Index: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }
      });
    // 获取屏幕宽度
    const screenWidth = Dimensions.get('window').width;

    // 获取屏幕高度
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={{width: '100%',height: screenHeight,display: 'flex',flexDirection: 'column',padding: '3.5%'}}>
            <ScrollView style={{flex: 1}} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.Index}>
                    <IndexTop/>
                    <Image source={require('../../public/img/yuban.jpg')} alt='图片' style={{width:'100%',height: 150,marginBottom: 15}}/>
                    <IndexMenu></IndexMenu>
                    <IndexAddMusic/>
                    <MusicList/>
                    <EaPopMusicList/>
                    <LeaderBoard/>
                    <BqSongList/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Index;