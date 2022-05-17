import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import React, {useContext} from 'react';
import {Avatar} from '../../components/Avatar';
import {Title} from 'react-native-paper';
import {AuthContext} from '../../navigation/AuthProvider';
import {Colors} from '../../Colors';

export default function InitialScreen({navigation}) {
  const {user, dob, logout} = useContext(AuthContext);
  const onAvatarChange = image => {
    console.log(image);
    // upload image to server here
  };
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.userRow}>
        <Avatar
          onChange={onAvatarChange}
          source={require('../../media/avatar.png')}
        />
      </View>
      <View style={styles.content}>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate('ViewProfileScreen');
          }}>
          <Text style={styles.accountOption}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <Text style={styles.accountOption}>Edit Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {}}>
          <Text style={styles.accountOption}>Dating Preferences</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {}}>
          <Text style={styles.accountOption}>Settings</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            logout();
          }}>
          <Text style={styles.accountOption}>Logout</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          onPress={() => {}}>
          <Text style={styles.accountOption}>Deactivate My Account</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
  },
  accountOptions: {
    paddingVertical: 15,
    padding: 20,
  },
  accountOption: {
    fontSize: 16,
    color: Colors.black,
  },
});
