import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen';
import PinsScreen from '../screens/PinsScreen';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function PinsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons name="map-outline" size={25} color={tabInfo.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pins"
          component={PinsScreen}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons name="pin-outline" size={25} color={tabInfo.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
