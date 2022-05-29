import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';

export default function ProgressStepBar({current, total}) {
  const unreached = total - current;
  return (
    <View style={styles.stepBarContainer}>
      {[...Array(current)].map((value, index) => {
        return (
          <View key={index} style={[styles.stepBar, styles.stepBarReached]} />
        );
      })}
      {[...Array(unreached)].map((value, index) => {
        return (
          <View key={index} style={[styles.stepBar, styles.stepBarUnReached]} />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  stepBarContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 8,
  },
  stepBar: {
    flex: 1,
    margin: 2,
    borderRadius: 5,
  },
  stepBarReached: {
    backgroundColor: Colors.primary,
  },
  stepBarUnReached: {
    backgroundColor: Colors.placeholder,
  },
});
