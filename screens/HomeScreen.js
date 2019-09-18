import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import WhereTo from '../components/WhereTo';

const { PROVIDER_GOOGLE } = MapView;

class HomeScreen extends React.Component {
    state = {
        showMap: false,
        userLat: 0,
        userLon: 0
    };

    async componentDidMount() {
        try {
            await Location.requestPermissionsAsync();
            const { coords } = await Location.getCurrentPositionAsync()
            this.setState({
                showMap: true,
                userLat: coords.latitude,
                userLon: coords.longitude
            });
        } catch (err) {
            err => alert(err)
        }
    }

    render() {
        const { showMap, userLat, userLon } = this.state;

        return (
            <View style={styles.container}>
                {
                    showMap ? <MapView
                        followsUserLocation
                        provider={PROVIDER_GOOGLE}
                        region={{
                            latitude: userLat,
                            longitude: userLon,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                        showsUserLocation
                        style={styles.map}
                    /> : null
                }

                <WhereTo />

                <View style={{ alignItems: "center", marginTop: 25 }}>
                    <TouchableOpacity
                        style={styles.menuIcon}
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Ionicons name="md-person" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },

    map: {
        height: "100%",
        position: 'absolute',
        width: "100%"
    },

    menuIcon: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    }
});

export default (HomeScreen);