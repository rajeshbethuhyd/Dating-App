import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
export default function SaveIcon({disabledProp, ...rest}) {
  return (
    <Pressable
      disabled={disabledProp}
      style={styles.pressableView}
      android_ripple={{borderless: true}}
      {...rest}>
      <Icon
        name="checkmark"
        size={27}
        color={Colors.black}
        style={styles.iconstyle}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableView: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
