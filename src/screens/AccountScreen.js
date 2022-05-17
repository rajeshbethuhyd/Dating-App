import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Pressable} from 'react-native';
import InitialScreen from './AccountTab/InitialScreen';
import ProfileScreen from './AccountTab/ProfileScreen';
import CityScreen from './setupscreens/CityScreen';
import {Colors} from '../Colors';

import SaveIcon from '../components/SaveIcon';
import ViewProfileScreen from './AccountTab/ViewProfileScreen';

const AccountStack = createNativeStackNavigator();
export default function AccountScreen({navigation}) {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{
          headerTitle: 'My Account',
        }}
      />
      <AccountStack.Screen
        name="ViewProfileScreen"
        component={ViewProfileScreen}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'View Profile',
          // headerRight: () => <SaveIcon disabledProp={true} />,
        }}
      />
      <AccountStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Profile',
          // headerRight: () => <SaveIcon disabledProp={true} />,
        }}
      />
      <AccountStack.Screen
        name="CityScreen"
        component={CityScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
          animation: 'slide_from_bottom',
          headerTitle: 'Profile',
        }}
      />
    </AccountStack.Navigator>
  );
}
