import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function ProgressStepBar() {
  return (
    <View style={styles.stepBarContainer}>
      <View style={styles.stepBarReached}></View>
      <View style={styles.stepBarReached}></View>
      <View style={styles.stepBarUnReached}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  stepBarContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 10,
  },
  stepBarReached: {
    flex: 1,
    backgroundColor: Colors.primary,
    margin: 2,
  },
  stepBarUnReached: {
    flex: 1,
    margin: 2,
    backgroundColor: Colors.placeholder,
  },
});
