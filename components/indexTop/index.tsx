import React from 'react';
import { View, Image, StyleSheet, Text, TextInput } from 'react-native';
import SearchBar from '@ant-design/react-native/lib/search-bar'

const IndexTop:React.FC = () => {
    const styles = StyleSheet.create({
        IndexTop: {
            display: 'flex',
            flexDirection: 'row',
            width:'100%',
            height: 35,
            justifyContent: 'space-between'
        },
        children: {
            justifyContent: 'flex-start'
        },
        input: {
            backgroundColor: 'white',
            height: 35,
            width: '65%',
            justifyContent: 'flex-start',
            fontSize: 12
        }
    })
    return (
        <View style={styles.IndexTop}>
            <View style={styles.children}>
                <Image source={require('../../public/icon/menu.png')} alt='菜单' style={{width: 30,height: 30}}/>
            </View>
            <TextInput value='' style={styles.input} placeholder='请输入要查找的内容'/>
            <Image source={require('../../public/icon/voice.png')} alt='语音' style={{width: 35,height: 35}}/>
        </View>
    )
}

export default IndexTop;