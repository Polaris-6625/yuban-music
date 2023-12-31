import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MusicItemType } from '../../types/musicItem';
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/modules/controlStateSlice';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { changeName } from '../../store/modules/playingNameSlice';
import usePlaySong from '../../api/fetchSong';

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
    const playSong = usePlaySong()
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