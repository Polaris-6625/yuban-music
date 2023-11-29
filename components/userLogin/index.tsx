import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const UserLogin: React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 30
        },
        board: {
            height: 110,
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: 'white'
        },
        avatar: {
            width: 70,
            height: 70,
            position: "absolute",
            backgroundColor: 'grey',
            borderRadius: 50,
            zIndex: 100,
            left: '50%',
            right: 'auto',
            transform: [{translateX: -17.5},{translateY: 0}],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image source={require("../../public/icon/avatar.png")} style={{width: 60,height: 60}} />
            </View>
            <View style={styles.board}>
                <Text style={{fontSize: 24,fontWeight: "400",marginTop: 25}}>立即登陆 &gt;</Text>
            </View>
        </View>
    )
}

export default UserLogin;