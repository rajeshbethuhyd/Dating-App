import {View, Text} from 'react-native';
import React, {useContext, createContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import database from '@react-native-firebase/database';
import ViewProfileScreen from '../screens/ViewProfileScreen';
import {AuthContext} from './AuthProvider';

export const LikesContext = createContext();
const HomeStack = createNativeStackNavigator();

export default function HomeScreenStack() {
  const {user} = useContext(AuthContext);
  const [sentLikes, setSentLikes] = useState([]);
  useEffect(() => {
    const onValueChange = database()
      .ref(`/SentLikes/${user.uid}`)
      .on('value', snapshot => {
        setSentLikes(snapshot.val());
      });

    // Stop listening for updates when no longer required
    return () =>
      database().ref(`/SentLikes/${user.uid}`).off('value', onValueChange);
  }, []);
  return (
    <LikesContext.Provider value={{sentLikes}}>
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
    </LikesContext.Provider>
  );
}
