import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 42.0452707341395 + i * 0.001,
      longitude: -87.75099024608113 + i * 0.001,
    });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 42.0452707341395,
        longitude: -87.75099024608113,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
