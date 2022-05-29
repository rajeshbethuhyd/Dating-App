import {View, Text} from 'react-native';
import GetLocation from 'react-native-get-location';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import RNLocation from 'react-native-location';
// RNLocation.configure({
//   distanceFilter: 5.0,
// });

export default function Temp() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    permissionHandle();
  }, []);
  const permissionHandle = async () => {
    console.log('line 13');
    let permission = await RNLocation.checkPermission({
      android: {
        detail: 'fine', // or 'coarse'
      },
    });
    let temp_location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      temp_location = await RNLocation.getLatestLocation({timeout: 100});
      setLocation(temp_location);
      setLoading(false);
    } else {
      temp_location = await RNLocation.getLatestLocation({timeout: 100});
      setLocation(temp_location);
      setLoading(false);
    }
  };
  if (location === null) {
    console.log('line 46');
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>{location.latitude + ', ' + location.longitude}</Text>
      </View>
    );
  }
}
