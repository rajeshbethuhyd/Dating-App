import React, {useState, useContext, createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './AuthProvider';
import {View, Button, Text, Pressable} from 'react-native';
import {Colors} from '../Colors';
import BasicDetailsScreen from '../screens/setupscreens/BasicDetailsScreen';
import CityScreen from '../screens/setupscreens/CityScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePicScreen from '../screens/setupscreens/ProfilePicScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export const UserInfoContext = createContext({});

export default function MainApp() {
  const {user, logout} = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(Doc => {
        if (Doc.exists) {
          setUserData(Doc.data());
          setLoadingUser(false);
        }
      })
      .catch(e => {
        console.log('Error:' + e);
      });
  }, []);

  if (loadingUser) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} color={Colors.primary} />
      </View>
    );
  }

  return (
    <UserInfoContext.Provider value={{userData}}>
      <Tab.Navigator
        activeColor={Colors.white}
        barStyle={{backgroundColor: Colors.primary}}
        initialRouteName="Account"
        labeled={false}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'My Account',
            tabBarIcon: ({color}) => (
              <Icons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </UserInfoContext.Provider>
  );
}
