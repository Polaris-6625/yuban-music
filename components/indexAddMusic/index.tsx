import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Button from '@ant-design/react-native/lib/button'

const IndexAddMusic:React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 30
        },
        avator: {
            width: 30,
            height: 30,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center'
        },
        avator_img: {
            width: 20,
            height: 20
        },
        Text: {
            display: 'flex',
            flexDirection: "column",
            marginLeft: 10
        },
        title: {
            fontSize: 16
        },
        Desc: {
            fontSize: 12
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.avator}>
            <Image source={require('../../public/icon/yinfu.png')} alt='导入' style={styles.avator} />
            </View>
            <View style={styles.Text}>
                <Text style={styles.title}>导入外部歌单</Text>
                <Text style={styles.Desc}>轻松导入其他App里的歌单</Text>
            </View>
            <View style={{display: 'flex',flexDirection: 'row',marginTop: 'auto',marginLeft: 'auto',marginRight: 16}}>
                <Button size='small'>
                    去导入
                </Button>
                <Image source={require('../../public/icon/closed.png')} alt='关闭' style={{marginTop: 2,marginLeft: 5,width: 20,height: 20}} />
            </View>
        </View>
    )
}

export default IndexAddMusic;