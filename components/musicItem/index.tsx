import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MusicItemType } from '../../types/musicItem';

const MusicItem: React.FC<{data: MusicItemType}> = (props) => {
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
    return (
        <View style={styles.container}>
            <Image source={{uri:props.data.coverImgUrl}} alt='歌曲图片' style={styles.Image}/>
            <View style={styles.Text}>
                <Text ellipsizeMode='tail'>
                    { props.data.description }
                </Text>
            </View>
        </View>
    )
}

export default MusicItem;