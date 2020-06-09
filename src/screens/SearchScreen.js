import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchAPI, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' || '$$$$'
        return results.filter(result => {
            return result.price === price
        });
    }
 
    return (
        <>
            <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onTermSubmit={() => searchAPI(searchTerm)} />
            {
                error 
                ? <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text> 
                : <ScrollView>
                    {
                        filterResultsByPrice('$').length > 0 ? <ResultsList title="Cost Effective 💲" results={filterResultsByPrice('$')} /> : null
                    }
                    {
                        filterResultsByPrice('$').length > 0 ? <ResultsList title="Bit Pricier 💵" results={filterResultsByPrice('$$')} /> : null
                    }
                    {
                        filterResultsByPrice('$$$').length > 0 ? <ResultsList title="Big Spender 🤑" results={filterResultsByPrice('$$$')} /> : null
                    }
                    {
                        filterResultsByPrice('$$$$').length > 0 ? <ResultsList title="Break the Bank 💯" results={filterResultsByPrice('$$$$')} /> : null
                    }  
                  </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    
});

export default SearchScreen
