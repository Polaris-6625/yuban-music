import React , { useEffect, useState } from 'react';
import { View , StyleSheet, Text, ScrollView , FlatList } from 'react-native';
import { MusicItemType } from '../../types/musicItem';
import MusicItem from '../musicItem';

const MusicList: React.FC = () => {
    const styles = StyleSheet.create({
        MusicList: {
            marginTop: 12
        },
        container: {
            marginTop: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10
        },
        list: {
            paddingVerticalL: 4,
            paddingHorizontal: 8
        },
        musicItem: {
            marginBottom: 8,
            marginRight: 6
        }
    })
    const [musicArray,setMusicArray] = useState<Array<MusicItemType>>([]);
    const TempArray:Array<MusicItemType> = [];
    let nextStart:number = 10;
    useEffect(()=>{
        fetch('http://codercba.com:9002/top/playlist')
            .then(response => response.json())
            .then(data => {
                // 处理返回的数据
                data.playlists.map((item:any)=>{
                    const {
                        id,name,description,coverImgUrl
                    } = item;
                    TempArray.push({
                        id,
                        name,
                        description,
                        coverImgUrl
                    });
                    // console.log(TempArray)
                })
                setMusicArray(TempArray);
            })
            .catch(error => {
                // 处理错误
                console.error(error);
            });
    },[]);
    const getNextData = () => {
        // 继续获取切片信息
        if (nextStart + 10 < TempArray.length) {
            setMusicArray(TempArray.slice(0,nextStart+10));
            nextStart += 10;
        }
        else if (nextStart < TempArray.length) {
            setMusicArray(TempArray.slice(0,TempArray.length));
            nextStart += 10;
        }
    };
    const renderMusicItem = ({ item }:any) => {
        return (
            <View style={styles.musicItem}>
                <MusicItem key={item.id} data={item} />
            </View>
        )
    };
    return (
        <View style={styles.MusicList}>
            <Text style={{fontSize: 17,fontWeight: '800'}}>
                推荐歌单&gt;
            </Text>
            <FlatList
                data={musicArray}
                keyExtractor={(item:any) => item.id.toString()}
                renderItem={renderMusicItem}
                onEndReached={getNextData}
                onEndReachedThreshold={0.5}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}

export default React.memo(MusicList);