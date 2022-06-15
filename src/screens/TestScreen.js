import {View, Text} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
export default function TestScreen() {
  React.useEffect(() => {
    // check('JfF12SYBWFU54nBcRf5N1mHiJQD3');
  }, []);

  const check = async uid => {
    const res = await database()
      .ref('/Interests/Bicycling')
      .orderByValue('')
      .equalTo(uid)
      .once('value');
  };
  return (
    <View>
      <Text>TestScreen</Text>
    </View>
  );
}
