import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 42.0452707341395,
        longitude: -87.75099024608113,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
