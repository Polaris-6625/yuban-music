import React from "react"
import { StyleSheet, Text, View } from "react-native"

const FollowTopDefault:React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            height: 110,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12
        },
        T1: {
            fontSize: 22,
            fontWeight: "600"
        },
        T2: {
            fontSize: 12
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.T1}>关注一下聊聊音乐</Text>
            <Text style={styles.T2}>关注后可以跟TA分享音乐，聊天，一起听...</Text>
        </View>
    )
}

export default FollowTopDefault;