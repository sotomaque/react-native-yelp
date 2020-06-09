import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [results, setResults] = React.useState([]);


    const searchAPI = async () => {
       const response = await yelp.get('/search', {
           params: {
               limit: 50,
               term: searchTerm,
               location: 'Bellevue, Washington'
           }
       });
       setResults(response.data.businesses)
    }



    return (
        <View>
            <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onTermSubmit={searchAPI} />
            <Text>Found {results.length} results</Text> 
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen
