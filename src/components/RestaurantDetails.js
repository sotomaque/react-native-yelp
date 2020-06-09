import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import { HEADER_IMAGE_HEIGHT } from './HeaderImage';
const MIN_HEADER_HEIGHT = 45;

const RestaurantDetails = ({ restaurant }) => {
    const { name } = restaurant;
    return (
        <>
            <View style={styles.placeholder} />
            <View style={styles.section}>
                <Text style={styles.text}>{name}</Text>

                <FlatList
                    data={restaurant.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={ ({ item, index }) => {
                        if (index !== 0) {
                            return <Image source={{ uri: item }} style={styles.image} />
                        }
                    }}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    section: {
        marginTop: -30
    },
    placeholder: {
        height: HEADER_IMAGE_HEIGHT,
        marginBottom: MIN_HEADER_HEIGHT,
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    },
    image: {
        height: 200,
        width: 300
    }
});


export default RestaurantDetails
