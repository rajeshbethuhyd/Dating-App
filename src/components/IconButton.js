import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconButton({iconName, size, color, label, ...rest}) {
  return (
    <Pressable {...rest}>
      <Icon name={iconName} size={size} color={color} />
    </Pressable>
  );
}
