import { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useDispatch } from 'react-redux';
import { changeState } from '../store/modules/controlStateSlice';
import { changeName } from '../store/modules/playingNameSlice';
import React from 'react';

function usePlaySong() {
  const dispatch = useDispatch();

  async function playSong(id: number, name: string) {
    dispatch(changeName(name));
    await TrackPlayer.pause();
    await TrackPlayer.reset();

    fetch(`http://codercba.com:9002/song/url?id=${id}`)
      .then(response => response.json())
      .then(async (data) => {
        await TrackPlayer.add({
          id: id,
          url: `https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`,
          title: '音频标题',
          artist: '艺术家',
          artwork: require('../public/icon/voice.png'),
        });

        TrackPlayer.play();
        dispatch(changeState());
      })
      .catch(error => {
        console.error(error);
      });
  }

  return playSong; // 如果需要返回值，请根据您的需求进行修改
}

export default usePlaySong;