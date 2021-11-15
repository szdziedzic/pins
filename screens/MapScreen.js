import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useSelector } from 'react-redux';
import { POSSIBLE_PINS } from '../data/possiblePins';

export default function MapScreen() {
  const selectedPins = useSelector((state) => state.pins.selectedPins);

  const [region, setRegion] = useState({
    latitude: 50.049683,
    longitude: 19.944544,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={(newRegion) => setRegion(newRegion.region)}
      >
        {selectedPins.map((title, ind) => {
          const pin = POSSIBLE_PINS.find((p) => p.title == title);
          return (
            <Marker
              key={ind}
              coordinate={pin.coordinate}
              title={pin.title}
              description={pin.description}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
