import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    // call search api with no search term on original render
    useEffect(() => {
        searchAPI('')
    }, [])

    const searchAPI = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'Bellevue, Washington'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setError('Something Went Wrong 🥺')
        }
    }


    return [ searchAPI, results, error ];
}