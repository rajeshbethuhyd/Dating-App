/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import SplashScreen from 'react-native-splash-screen';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Providers from './src/navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from './src/Colors';

GoogleSignin.configure({
  webClientId:
    '825796347513-ko0o3jm00ujso3kviuvlm596n8eg6ln6.apps.googleusercontent.com',
});

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0081A7',
      accent: '#fff',
      background: Colors.white,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Providers />
    </PaperProvider>
  );
};

export default App;
