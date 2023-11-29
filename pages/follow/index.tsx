import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FollowTopDefault from '../../components/followTopDefault';

const Follow:React.FC = () => {
    const styles = StyleSheet.create({
        zlItem: {
            padding: 10,
            borderWidth: 0.2,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderStyle: "solid",
            borderColor: "grey"
        }
    })
    return (
        <View>
            <View>
                <FollowTopDefault/>
            </View>
            <View style={styles.zlItem}>
                <Text>推荐动态</Text>
            </View>
        </View>
    )
}

export default Follow;