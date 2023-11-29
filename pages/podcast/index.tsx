import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndexTop from '../../components/indexTop';
import LablesTabs from '../../components/lablesTabs';
import PodcastPlayer from '../../components/podcastPlayer';
import EaPopMusicList from '../../components/eaPopMusicList';
import LeaderBoard from '../../components/leaderBoard';

const Podcast:React.FC = () => {
    const styles = StyleSheet.create({
        topTab: {
            marginTop: 35
        }
    })
    const arr = [
        "我的博客","全部分类","排行榜","宝藏博客"
    ]
    return (
        <View>
            <View style={styles.topTab}>
                <IndexTop />
            </View>
            <LablesTabs data={arr}/>
            <PodcastPlayer/>
            <EaPopMusicList/>
            <LeaderBoard/>
        </View>
    )
}

export default Podcast;