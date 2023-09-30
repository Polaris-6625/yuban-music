import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MusicItemType } from '../../types/musicItem';
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/modules/controlStateSlice';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { changeName } from '../../store/modules/playingNameSlice';

const BqSongItem: React.FC<{data: MusicItemType}> = (props) => {
    const dispatch = useDispatch()
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        Image: {
            width: 100,
            height: 100
        },
        Text: {
            width: 100,
            height: 20,
            fontSize: 14,
            
        }
    })
    async function playSong(id: number,name: string): Promise<void> {
        dispatch(changeName(name))
        // 暂停播放并清空当前播放队列
        await TrackPlayer.pause();
        await TrackPlayer.reset();
        
        fetch(`http://codercba.com:9002/song/url?id=${id}`)
          .then(response => response.json())
          .then(async (data) => {
            // 处理返回的数据
            await TrackPlayer.add({
              id: id,
              url: `https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`,
              title: '音频标题',
              artist: '艺术家',
              artwork: require('../../public/icon/voice.png'),
              // 将当前音乐添加到队列中，并指定位置为当前播放的后面
            //   options: {
            //     playbackQueuePosition: 'next',
            //   },
            });
            TrackPlayer.setRepeatMode(RepeatMode.Queue)
            console.log(`https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`);
            
            TrackPlayer.play();
            dispatch(changeState())
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
      }
    return (
        <TouchableOpacity onPress={()=>{
            playSong(props.data.id,props.data.name);
        }} style={styles.container}>
            <Image source={{uri:props.data.coverImgUrl}} alt='歌曲图片' style={styles.Image}/>
            <View style={styles.Text}>
                <Text ellipsizeMode='tail'>
                    { props.data.description }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BqSongItem;