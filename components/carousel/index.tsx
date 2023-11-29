import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
    return (
        <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={3}>
            <View style={styles.slide}>
                <Image
                    source={require('../../public/img/slider1.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../../public/img/slider2.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../../public/img/slider3.jpg')}
                    style={styles.image}
                />
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Carousel;
