import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: restaurant.image_url }}  style={styles.imageStyles}/>
            <Text style={styles.restaurantNameStyles}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    restaurantNameStyles: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail
