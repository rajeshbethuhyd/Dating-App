import {View, Text} from 'react-native';
import React from 'react';
import {GeoFire} from 'geofire';
import database from '@react-native-firebase/database';

export default function Temp2() {
  const geoFireRef = new GeoFire(database().ref('/geoData/'));
  geoFireRef.set('nearby_location', [17.494028, 78.515626]);
}
