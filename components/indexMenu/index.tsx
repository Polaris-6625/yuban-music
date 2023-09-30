import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { indexMenu } from './data';
import IndexMenuItem from '../indexMenuItem/index';
const IndexMenu: React.FC = () => {
    const styles = StyleSheet.create({
        IndexMenu: {
            display: 'flex',
            width: '100%',
            height: 100
        },
        ScrollView: {
            flex: 1
        },
        Menu: {
            display: 'flex',
            gap: 12,
            flexDirection: 'row',
            overflow:'scroll'
        }
    })
    return (
        <View style={styles.IndexMenu}>
            <ScrollView style={styles.Menu} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.Menu}>
                    {
                        indexMenu.map((item)=>{
                            return (
                                    <IndexMenuItem data={item} key={item.key} />
                            )
                        })
                    }
                </View>
            </ScrollView>        
        </View>
    )
}

export default IndexMenu;