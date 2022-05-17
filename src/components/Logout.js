import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
export default function Logout() {
  const {user, logout} = useContext(AuthContext);
  return (
    <Button
      onPress={() => {
        logout();
      }}>
      Signout
    </Button>
  );
}
