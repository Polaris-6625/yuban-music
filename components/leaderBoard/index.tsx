import React from 'react';
import { View, StyleSheet , ScrollView , Text } from 'react-native';
import LeaderBoardItem from '../leaderBoardItem';
import { array } from './data';
const LeaderBoard: React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 245
        },
        title: {
            fontSize: 17,
            fontWeight: '800',
            marginBottom: 5
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                排行榜&gt;
            </Text>
            <ScrollView style={{flex: 1}} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {
                    array.map((item)=>{
                        return <LeaderBoardItem key={item} data={item}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default LeaderBoard;