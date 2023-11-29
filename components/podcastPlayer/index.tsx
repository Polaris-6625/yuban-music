import React from "react"
import { StyleSheet, View } from "react-native";
import Carousel from "../carousel";

const PodcastPlayer: React.FC = () => {
    const Style = StyleSheet.create({
        podcastPlayer: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 18,
            marginBottom: 22,
            padding: 15,
            // backgroundColor: "rgba(236,178,136,30)",
            width: "94%",
            height: "28%",
        },
        slide: {
            position: "relative",
            margin: "auto",
            width: "100%",
            height: "100%",
            textAlign: "center",
            overflow: "hidden"
        }
    })
    return (
        <View style={Style.podcastPlayer}>
            <View style={{ flex: 1 }}>
                <Carousel />
            </View>

        </View>
    )
}

export default PodcastPlayer;