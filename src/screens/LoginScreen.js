import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../navigation/AuthProvider';
export default function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../media/login.jpg')}
      resizeMode="cover"
      style={styles.imagebackground}>
      <Image style={styles.logo} source={require('../media/liebelogo.png')} />
      <View style={styles.socialsignincontainer}>
        <GoogleSigninButton
          style={styles.gbutton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.white}
          onPress={() => login()}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    height: '40%',
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialsignincontainer: {
    flex: 1,
  },
  gbutton: {
    height: 60,
  },
});
