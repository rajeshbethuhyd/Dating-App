import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../Colors';

export default function ActionButton(props, {...rest}) {
  return (
    <Pressable
      style={[styles.actionBtn, {borderColor: props.border}]}
      onPress={() => {}}
      {...rest}>
      <Icon name={props.iconName} color={props.color} size={props.size} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  actionBtn: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 40,
    // elevation: 5,
  },
});
