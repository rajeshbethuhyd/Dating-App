import {Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HeaderSkipBtn({navigateTo}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(navigateTo)}
      android_ripple={{color: '#cbdccb', borderless: false}}>
      <Text
        style={{
          color: '#fff',
          fontWeight: '600',
          fontSize: 16,
          padding: 10,
        }}>
        SKIP
      </Text>
    </Pressable>
  );
}
