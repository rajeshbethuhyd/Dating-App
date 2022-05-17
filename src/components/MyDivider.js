import {View} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';

export default function MyDivider() {
  return (
    <View
      style={{
        borderBottomColor: Colors.ligthgrey2,
        borderBottomWidth: 1,
      }}
    />
  );
}
