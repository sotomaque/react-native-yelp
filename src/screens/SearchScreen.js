import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const [searchAPI, results, error] = useResults();
 
    return (
        <View>
            <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onTermSubmit={() => searchAPI(searchTerm)} />
            {
                results.length !== 0 ? <Text>Found {results.length} results</Text> : null
            }
            {
                error ? <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen
