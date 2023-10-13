import React from 'react';
import { View , Text , StyleSheet, Image } from 'react-native';
import type { IndexMenuItemType } from '../../types/type';
import Icon from '@ant-design/react-native/lib/icon';
// import {
//     outlineGlyphMap,
//     OutlineGlyphMapType,
//   } from '@ant-design/icons-react-native'

const IndexMenuItem: React.FC<{data: IndexMenuItemType}> = (props) => {
    const styles = StyleSheet.create({
        IndexMenuItem: {
            display: 'flex',
            width: 60,
            height: 60
        },
        Icon: {
            textAlign: 'center'
        },
        Desc: {
            textAlign: 'center'
        },
        Image: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
        }
      });
    return (
        <View style={styles.IndexMenuItem} >
            {/* <Icon name='appstore-add' size="md" color="red" /> */}
            <View style={styles.Image}>
            <Image source={props.data.icon} alt='图标' style={{width: 30,height: 30,marginLeft: 'auto',marginRight: 'auto'}}/>
            </View>
            <Text style={styles.Desc}>{props.data.name}</Text>
        </View>
    )
}

export default IndexMenuItem;