import React, { useRef, useState } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import Button from '@ant-design/react-native/lib/button'
import TrackPlayer from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeMusicNow } from '../../store/modules/musicNowSlice';

const PlayControl: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 1,
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
  const dispatch = useDispatch();
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
        dispatch(changeMusicNow(resp))
      })
    })
  }
  //const playingNameSlice = useSelector((state: RootState) => state.playingNameSlice.value)
  const musicNowSlice = useSelector((state: RootState) => state.musicNowSlice.value)
  return (
    <View style={styles.container}>
      <Text>
        {musicNowSlice.title}
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