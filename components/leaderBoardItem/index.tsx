import React , { useEffect , useState } from 'react';
import { View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native';
import { EApopMusicItemType } from '../../types/EApopMusicItem';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import usePlaySong from '../../api/fetchSong';
import { setControlState } from '../../store/controlState';
import { setCurrentMusic } from '../../store/currentMusic';
import { setPlayingName } from '../../store/playingName';

const LeaderBoardItem: React.FC<{data: string}> = (props) => {
    const [musicItem,setMusicItem] = useState<Array<EApopMusicItemType>>([]);
    let TempArray:Array<EApopMusicItemType> = [];
    const [bdName,setBdName] = useState<string>('');
    useEffect(()=>{
        fetch(`http://codercba.com:9002/playlist/detail?id=${props.data}`)
            .then(response => response.json())
            .then(data => {
                // 处理返回的数据
                setBdName(data.playlist.name);
                data.playlist.tracks.map((item:any)=>{
                    const {
                        id,
                        name,
                        al,
                        ar,
                        alia
                    } = item;
                    TempArray.push({
                        id,
                        name,
                        username: ar[0].name,
                        picUrl: al.picUrl,
                        description: alia[0]
                    })
                });
                setMusicItem(TempArray.slice(0,4));
            })
            .catch(error => {
                // 处理错误
                console.error(error);
            });
    },[]);
    const styles = StyleSheet.create({
        Title: {
            fontSize: 16,
            fontWeight: '400',
            marginLeft: 8
        },
        image: {
            width: 40,
            height: 40
        },
        list: {
            display: 'flex',
            flexDirection: 'row'
        },
        parentList: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginLeft: 16,
            backgroundColor: 'white'
        },
        Ranking: {
            width: 25,
            height: 25,
            marginTop: 'auto',
            textAlign: 'center'
        }
    })
    async function playSong(id: number,name: string): Promise<void> {
        setPlayingName(name)
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
              artwork: require('../../public/icon/voice.png'),
              // 将当前音乐添加到队列中，并指定位置为当前播放的后面
            //   options: {
            //     playbackQueuePosition: 'next',
            //   },
            }).then(async (result)=>{
                await TrackPlayer.skipToNext()
                await TrackPlayer.play();
                await setControlState(true);
                // console.log(TrackPlayer.getTrack(0))
                TrackPlayer.setRepeatMode(RepeatMode.Queue)
                console.log("name is ",name)
                console.log("---data---")
                console.log('data',data)
                setCurrentMusic({
                    id: data.data[0].id,
                    url: `https://music.163.com/song/media/outer/url?id=${data.data[0].id}.mp3`,
                    title: data.data[0].name,
                    artist: '艺术家',
                })
            });
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
      }
      const handleClick = usePlaySong()
    return (
        <View>
            <Text style={styles.Title}>
                { bdName }&gt;
            </Text>
            <View style={styles.parentList}>
                {
                    musicItem.map((item,index)=>{
                        return (
                            <TouchableOpacity onPress={()=>{
                                handleClick(item.id,item.name)
                            }} style={styles.list} key={index}>
                                <View>
                                    <Image style={styles.image} source={{uri: item.picUrl}} alt='图片' />
                                </View>
                                <View style={styles.Ranking}>
                                    <Text style={{color: 'red',textAlign: 'center'}}>{index+1}</Text>
                                </View>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.username}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default LeaderBoardItem;