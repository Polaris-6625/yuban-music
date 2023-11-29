import React from "react"
import { StyleSheet, Text, View } from "react-native";

const LablesTabs: React.FC<{ data: Array<string> }> = (props) => {
    const Styles = StyleSheet.create({
        ArrayTabs: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
            justifyContent: "space-around"
        },
        ArrayItem: {
            backgroundColor: "rgba(127,127,127,10)",
            padding: 10,
            flexShrink: 1
        }
    })
    return (
        <View style={Styles.ArrayTabs}>
            {
                props.data.map((item,index) => {
                    return (
                        <Text style={Styles.ArrayItem} key={index}>
                            {item}
                        </Text>
                    )
                })
            }
        </View>
    )
}

export default LablesTabs;