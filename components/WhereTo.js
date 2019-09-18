import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import LocationItem from './LocationItem';

const WhereTo = () => (
  <View style={styles.container}>

    <View style={styles.containerBanner}>
      <Text style={styles.bannerText}>30% off, up to $6.00</Text>
      <Text style={styles.bannerMuted}>3 days</Text>
    </View>

    <GoogleAutoComplete
      minLength={2}
      apiKey={"AIzaSyCqO5s3aXFNODGskeDUNhd9IjkSKZbfwiA"}
      query={{
        key: 'AIzaSyCqO5s3aXFNODGskeDUNhd9IjkSKZbfwiA',
        language: 'en',
        location: '22.6420, 88.4312',
        radius: '15000',
        components: 'country:mx',
        strictbounds: true,
      }}
    >
      {({ inputValue, handleTextChange, locationResults, fetchDetails, clearSearchs }) => (
        <React.Fragment>
          <View style={styles.containerInput}>
            <View style={styles.containerSquare}>
              <View style={styles.square} />
            </View>
            <View>
              <TextInput
                style={styles.text}
                value={inputValue}
                onChangeText={handleTextChange}
                placeholder="Where To..."
              />
            </View>
            <View style={styles.containerIcon}>
              <TouchableOpacity onPress={clearSearchs}>
                <Ionicons name="md-close" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.results}>
            {locationResults.map((el, i) => (
              <LocationItem
                {...el}
                fetchDetails={fetchDetails}
                key={String(i)}
              />
            ))}
          </ScrollView>
        </React.Fragment>
      )}
    </GoogleAutoComplete>

  </View>

);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: 120,
    width: "80%"
  },
  containerBanner: {
    backgroundColor: "#FCD705",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  bannerText: {
    color: "#fff",
    fontSize: 12
  },
  bannerMuted: {
    color: "#98ff98",
    fontSize: 12
  },
  containerInput: {
    alignItems: 'center',
    backgroundColor: "#fff",
    flexDirection: 'row',
    height: 48
  },
  containerSquare: {
    alignItems: 'center',
    flex: 2
  },
  square: {
    backgroundColor: "black",
    height: 8,
    width: 8
  },
  text: {
    color: "grey",
    flex: 8,
    fontSize: 20
  },
  containerIcon: {
    alignItems: 'center',
    borderLeftColor: "grey",
    borderLeftWidth: 1,
    flex: 2
  },

  results: {
    position: "absolute",
    width: "100%",
    marginTop: 90,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 10
  }
});

export default WhereTo;