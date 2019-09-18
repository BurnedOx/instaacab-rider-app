import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const TextOrInput = props => {
    return (
        <View style={styles.container}>
            {props.label && <Text style={styles.label}>{props.label}: </Text>}
            <Text style={props.style}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },

    label: {
        fontSize: 20,
        color: "gray",
        marginRight: 10
    }
});

export default TextOrInput;