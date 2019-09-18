import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextOrInput from '../components/TextOrInput';
import headerBackground from "../assets/bg-01.jpg";

class ProfileScreen extends React.Component {
    state = {
        profile: {
            name: "Mainak Debnath",
            email: "makhammer8@gmail.com",
            mobile: "8100513876",
            image: ""
        }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.header} source={headerBackground}>
                    <TextOrInput style={styles.name}>{this.state.profile.name}</TextOrInput>
                </ImageBackground>
                <View style={styles.detailsContainer}>
                    <TextOrInput label="Email">{this.state.profile.email}</TextOrInput>
                    <TextOrInput label="Mobile">{this.state.profile.mobile}</TextOrInput>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    header: {
        height: 250,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    name: {
        fontSize: 20,
        color: "#fff"
    },

    detailsContainer: {
        padding: 20
    }
});

export default ProfileScreen;