import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import {GeoFire} from 'geofire';

export default function Temp() {
  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = () => {
    const geoFireRef = new GeoFire(database().ref('/geoData/'));
    geoFireRef.set('test', [12.492379, 78.516338]);
  };
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}
