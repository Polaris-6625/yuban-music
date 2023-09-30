import React from 'react';
import { View, Image, StyleSheet , Text, TouchableOpacity } from 'react-native';
import Tag from '@ant-design/react-native/lib/tag'
import { EApopMusicItemType } from '../../types/EApopMusicItem';
import TrackPlayer from 'react-native-track-player';
import { useDispatch } from 'react-redux';
import { changeName } from '../../store/modules/playingNameSlice';
import { changeState } from '../../store/modules/controlStateSlice';

const EApopMusicItem: React.FC<{data: EApopMusicItemType}> = (props) => {
    const dispatch = useDispatch()
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row'
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 12
        },
        Title: {
            fontSize: 16,
            fontWeight: '400'
        },
        Desc: {
            justifyContent: 'flex-end'
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
      
            // console.log("id:" + id);
            // console.log(`https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`);
      
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
            playSong(props.data.id,props.data.name)
        }} style={styles.container}>
            <Image source={{uri: props.data.picUrl}} alt='歌曲图片' style={{width: 100,height: 100}}/>
            <View style={styles.text}>
                <Text style={styles.Title}>
                    { props.data.name }
                </Text>
                <Text style={styles.Desc}>
                    <View style={{marginTop: 10}}><Tag>{ props.data.username }</Tag></View> { props.data.description }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default EApopMusicItem;