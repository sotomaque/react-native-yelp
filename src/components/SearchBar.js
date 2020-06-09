import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

import { EvilIcons } from '@expo/vector-icons'; 

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {

    const [state, setState] = React.useState('');
    const timeOut = React.useRef(null);
    
    // only trickle up typed in value if it has been 1/2 a second since user stopped typing
    // to avoid querying API after every single letter is typed in
    const doSearch = (text) => {
        clearTimeout(timeOut.current);
        setState(text);
        timeOut.current = setTimeout(() => {
            onTermChange(text); 
            onTermSubmit();
        }, 500);
    }

    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search..."
                value={state}
                onChangeText={(text) => doSearch(text)}
                onEndEditing={onTermSubmit}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 5,
        fontSize: 18
    }
})

export default SearchBar
