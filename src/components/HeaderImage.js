import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

const { height: wHeight, width: wWidth } = Dimensions.get('window');
export const HEADER_IMAGE_HEIGHT = wHeight / 3;

const HeaderImage = ({ backgroundImage }) => {
    return (
        <Image source={{ uri: backgroundImage }} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: wWidth,
        resizeMode: 'cover',
        height: HEADER_IMAGE_HEIGHT
    }
})


export default HeaderImage
