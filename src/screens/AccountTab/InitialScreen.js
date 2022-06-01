import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {Avatar} from '../../components/Avatar';
import {Title, Switch} from 'react-native-paper';
import {AuthContext} from '../../navigation/AuthProvider';
import {Colors} from '../../Colors';
import MyDivider from '../../components/MyDivider';

export default function InitialScreen({navigation}) {
  const {user, dob, logout} = useContext(AuthContext);
  const [invisible, setInvisible] = React.useState(false);
  const switchInvisible = () => setInvisible(!invisible);

  const onAvatarChange = image => {
    console.log(image);
  };
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar backgroundColor={Colors.primary} />
      {/* <View style={styles.userRow}>
        <Avatar
          onChange={onAvatarChange}
          source={require('../../media/avatar.png')}
        />
      </View> */}
      <View style={styles.content}>
        <Pressable
          android_ripple={{color: Colors.ligthgrey}}
          style={styles.accountOptions}
          onPress={() => {
            navigation.navigate('ViewProfileScreen');
          }}>
          <Text style={styles.accountOption}>Profile</Text>
        </Pressable>

        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {}}>
          <Text style={styles.accountOption}>Dating Preferences</Text>
        </TouchableHighlight>
        <View style={{marginVertical: 8}}>
          <MyDivider />
        </View>
        <View style={styles.accountOptions}>
          <Text style={styles.accountOption}>Invisible Mode</Text>
          <Switch
            value={invisible}
            onValueChange={switchInvisible}
            color={Colors.primary}
          />
        </View>
        <View style={{marginVertical: 8}}>
          <MyDivider />
        </View>
        <TouchableHighlight
          style={styles.accountOptions}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            logout();
          }}>
          <Text style={styles.accountOption}>Logout</Text>
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
    padding: 20,
  },
  accountOptions: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountOption: {
    fontSize: 16,
    color: Colors.black,
  },
});
