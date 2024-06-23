import React from 'react';
import { View, Image, StyleSheet , Text, TouchableOpacity } from 'react-native';
import Tag from '@ant-design/react-native/lib/tag'
import { EApopMusicItemType } from '../../types/EApopMusicItem';
import startPlaySong from '../../api/fetchSong';

const EApopMusicItem: React.FC<{data: EApopMusicItemType}> = (props) => {
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
    const playSong = startPlaySong()
    return (
        <TouchableOpacity onPress={()=>{
            console.log('props',props.data);
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