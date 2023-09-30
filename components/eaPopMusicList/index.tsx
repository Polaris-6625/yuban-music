import React , { useEffect , useState , memo } from 'react';
import { View, StyleSheet , Text , FlatList } from 'react-native';
import { EApopMusicItemType } from '../../types/EApopMusicItem';
import EApopMusicItem from '../eaPopMusicItem';

const EApopMusicList: React.FC = () => {
    const TempArray: Array<EApopMusicItemType> = [];
    const [EApopMusicArray,setEApopMusicArray] = useState<Array<EApopMusicItemType>>([]);
    let nextStart:number = 10;
    useEffect(()=>{
        fetch('http://codercba.com:9002/playlist/detail?id=24381616')
            .then(response => response.json())
            .then(data => {
                // 处理返回的数据
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
                setEApopMusicArray(TempArray.slice(0,nextStart));
            })
            .catch(error => {
                // 处理错误
                console.error(error);
            });
    },[])
    const getNextData = () => {
        // 继续获取切片信息
        if (nextStart + 10 < TempArray.length) {
            setEApopMusicArray(TempArray.slice(0,nextStart+10));
            nextStart += 10;
        }
        else if (nextStart < TempArray.length) {
            setEApopMusicArray(TempArray.slice(0,TempArray.length));
            nextStart += 10;
        }
    };
    const renderMusicItem = ({ item }:any) => {
        return <EApopMusicItem key={item.id} data={item} />;
    };
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row'
        }
    })
    return (
        <View style={{display:'flex',flexDirection: 'column'}}>
            <Text style={{fontSize: 17,fontWeight: '800'}}>经典歌单&gt;</Text>
            <FlatList
                data={EApopMusicArray}
                keyExtractor={(item:any) => item.id.toString()}
                renderItem={renderMusicItem}
                onEndReached={getNextData}
                onEndReachedThreshold={0.5}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default memo(EApopMusicList);