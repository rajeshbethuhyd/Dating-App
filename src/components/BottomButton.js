import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';

const BottomButton = ({label, stylesprop, ...rest}) => {
  return (
    <Pressable
      style={styles.bottombtn}
      {...rest}
      android_ripple={{color: '#fff'}}>
      <Text style={styles.btntext}>{label}</Text>
    </Pressable>
  );
};

export default BottomButton;
const styles = StyleSheet.create({
  bottombtn: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  btntext: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
