import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { bottomMenuData } from "./data";
import IndexMenuItem from "../indexMenuItem";
import { useNavigation } from '@react-navigation/native'

const BottomTabs: React.FC = () => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 1,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            paddingLeft: 20,
            paddingTop: 1,
            paddingRight: 20,
            paddingBottom: 0,
            backgroundColor: 'white',
            justifyContent: 'space-between'
        }
    });
    return (
        <View style={styles.container}>
            {
                bottomMenuData.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate(item.url)}>
                            <IndexMenuItem data={item} key={item.key} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default BottomTabs;