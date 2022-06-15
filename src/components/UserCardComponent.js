import {
  Dimensions,
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Image,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';
import {Subheading} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from './ActionButton';

export default function UserCardComponent({userInfo}) {
  console.log('PROPS');
  console.log(userInfo.key);
  return (
    <View style={styles.container}>
      <View style={styles.CardSection}>
        <Image
          source={require('../assets/img/rajesh.jpg')}
          resizeMode="cover"
          style={styles.userCardImg}
        />
        <Pressable style={styles.chatIcon}>
          <MaterialIcons name="chat" color={Colors.white} size={33} />
        </Pressable>
        <View style={styles.userCardInfo}>
          <View style={styles.userCardInfofirstrow}>
            <Subheading style={styles.userCardName}>{userInfo.key}</Subheading>
            <Subheading style={[styles.userCardName, styles.userCardAgeGen]}>
              M, 25
            </Subheading>
          </View>
          <View style={styles.userCardInfosecondrow}>
            <Subheading>Looking For FriendShip</Subheading>
            <Subheading>{userInfo.distance} kms away</Subheading>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.ActionButtonText}>SAVE</Text>
          </Pressable>
          <ActionButton
            iconName={false ? 'heart' : 'heart-outline'}
            border={Colors.primary}
            color={Colors.primary}
            size={35}
          />
          <Pressable style={styles.actionButton}>
            <Text style={styles.ActionButtonText}>VIEW</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  CardSection: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: '6%',
    elevation: 5,
    height: '80%',
  },
  userCardImg: {
    flex: 10,
    height: '70%',
    width: '100%',
    alignSelf: 'center',
  },
  chatIcon: {
    position: 'absolute',
    right: '5%',
    bottom: '40%',
    borderRadius: 30,
    padding: 10,
    backgroundColor: Colors.primary,
  },
  userCardInfo: {
    flex: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userCardInfofirstrow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    flex: 1,
  },
  userCardInfosecondrow: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCardName: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'sans-serif-medium',
  },
  userCardAgeGen: {},
  actionButtons: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionButton: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
    borderColor: Colors.thickTomato,
  },
  ActionButtonText: {
    color: Colors.thickTomato,
    fontSize: 15,
    fontWeight: '600',
  },
});
