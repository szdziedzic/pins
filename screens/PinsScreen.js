import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { POSSIBLE_PINS } from '../data/possiblePins';
import { useDispatch, useSelector } from 'react-redux';
import { togglePin } from '../store/actions/pins';

export default function PinsScreen() {
  const selectedPins = useSelector((state) => state.pins.selectedPins);
  const dispatch = useDispatch();

  const renderPinSelectors = () => {
    return POSSIBLE_PINS.map((pin) => {
      return (
        <View key={pin.title} style={styles.pin}>
          <Text>{pin.title}</Text>
          <Switch
            value={selectedPins.includes(pin.title)}
            onChange={() => dispatch(togglePin(pin.title))}
          />
        </View>
      );
    });
  };

  return <View style={styles.container}>{renderPinSelectors()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  pin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginVertical: 15,
  },
});
