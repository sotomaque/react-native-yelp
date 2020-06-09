import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp'

import HeaderImage from '../components/HeaderImage';
import RestaurantDetail from '../components/RestaurantDetails';


const ResultsShowScreen = ({ navigation }) => {

    const id = navigation.getParam('id');

    const [result, setResult] = React.useState(null)
    const [error, setError] = React.useState('');

    const getRestaurantDetails = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data)
        } catch (err) {
            setError('Something went wrong')
        }
    }

    React.useEffect(() => {
        getRestaurantDetails(id)
    }, [])


    if (result) {
        const { image_url } = result;
        return (
            <View style={styles.container}>
                <HeaderImage backgroundImage={image_url} />
                <View>
                    <RestaurantDetail restaurant={result} />
                </View>
            </View>
        )
    } 
    
    else {
        return (
            <View>
                <Text> Loading ...</Text>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1
    }
})

export default ResultsShowScreen;