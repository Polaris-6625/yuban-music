import React, { useRef, useState } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import Button from '@ant-design/react-native/lib/button'
import TrackPlayer from 'react-native-track-player';
import { MusicListItemSlice, setCurrentMusic, useCurrentMusic } from '../../store/currentMusic';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 40,
    paddingTop: 15,
    paddingRight: 40,
    paddingBottom: 15,
    backgroundColor: 'white'
  }
})

const PlayControl: React.FC = () => {
  const isPlaying = useRef(true);
  const [btnValue,setBtnValue] = useState<string>('暂停')
  function play() {
    if (isPlaying.current) {
      TrackPlayer.pause();
      isPlaying.current = false;
    } else {
      TrackPlayer.play();
      isPlaying.current = true;
    }
    setBtnValue(isPlaying.current ? '暂停' : '播放');
  }
  async function nextMusic() {
    await TrackPlayer.skipToNext()
    TrackPlayer.getCurrentTrack().then((res:any)=>{
      TrackPlayer.getTrack(res).then((resp)=>{
        console.log(resp)
        setCurrentMusic(resp as MusicListItemSlice)
      })
    })
  }
  const currentMusic = useCurrentMusic()
  console.log("currentMusic",currentMusic)
  return (
    <View style={styles.container}>
      <Text>
        {currentMusic?.title}
      </Text>
      <Button onPress={nextMusic} size='small' style={{marginLeft: 12}}>
        下一曲
      </Button>
      <Button onPress={play} size='small' style={{marginLeft: 'auto'}}>
        {btnValue}
      </Button>
    </View>
  )
}

export default React.memo(PlayControl);