import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LocationItem = (props) => {
    return (
        <TouchableOpacity style={styles.root}>
            <Text>{props.description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center"
    }
});

export default LocationItem;