import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function PostActionIcon({iconName, onpress}) {
  return <Icon name={iconName} size={30} color={'black'} onPress={onpress} />;
}
