import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import {GeoFire} from 'geofire';
import Temp2 from './AccountTab/Temp2';

export default function Temp() {
  useEffect(() => {
    // Temp2();
    getLocations();
  }, []);

  const getLocations = async () => {
    const geoFireRef = new GeoFire(database().ref('/geoData/'));
    const my_curr_location = await geoFireRef.get('test');
    const geoQuery = geoFireRef.query({
      center: my_curr_location,
      radius: 100,
    });
    geoQuery.on('key_entered', (key, location, distance) => {
      console.log(
        'user ' +
          key +
          ' is at ' +
          location +
          ' and is ' +
          distance +
          ' away from the center',
      );
    });
  };
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}
