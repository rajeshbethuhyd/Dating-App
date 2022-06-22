import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ViewProfileScreen from '../screens/ViewProfileScreen';

const HomeStack = createNativeStackNavigator();
export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ViewProfileScreen"
        component={ViewProfileScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </HomeStack.Navigator>
  );
}
