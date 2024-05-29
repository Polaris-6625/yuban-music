import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import React from 'react';
import { setControlState } from '../store/controlState';
import { setCurrentMusic } from '../store/currentMusic';
import { setPlayingName, usePlayingName } from '../store/playingName';

function usePlaySong() {
  const playingName = usePlayingName()
  async function playSong(id: number,name: string): Promise<void> {
    setPlayingName(name)
    console.log(name)
    console.log('playingName',playingName)
    // 暂停播放并清空当前播放队列
    await TrackPlayer.pause();
    //await TrackPlayer.reset();
    
    fetch(`http://codercba.com:9002/song/url?id=${id}`)
      .then(response => response.json())
      .then(async (data) => {
        // 处理返回的数据
        await TrackPlayer.add({
          id: id,
          url: `https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`,
          title: name,
          artist: '艺术家',
          artwork: require('../public/icon/voice.png'),
          // 将当前音乐添加到队列中，并指定位置为当前播放的后面
        //   options: {
        //     playbackQueuePosition: 'next',
        //   },
        }).then(async (result)=>{
            await TrackPlayer.skipToNext()
            await TrackPlayer.play();
            await setControlState(true)
            // console.log(TrackPlayer.getTrack(0))
            TrackPlayer.setRepeatMode(RepeatMode.Queue)
            console.log("name is ",name)
            setCurrentMusic(
              {
                  id,
                  url: `https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`,
                  title: name,
                  artist: '艺术家',
              }
            )
        });
      })
      .catch(error => {
        // 处理错误
        console.error(error);
      });
  }

  return playSong; // 如果需要返回值，请根据您的需求进行修改
}

export default usePlaySong;