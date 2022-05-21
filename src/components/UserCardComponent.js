import {
  Dimensions,
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';
import {Subheading} from 'react-native-paper';
import IconButton from './IconButton';

export default function UserCardComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.CardSection}>
        <Image
          source={require('../assets/img/rajesh.jpg')}
          resizeMode="cover"
          style={styles.userCardImg}
        />
        <View style={styles.userCardInfo}>
          <View style={styles.userCardInfofirstrow}>
            <Subheading style={styles.userCardName}>Full Name</Subheading>
            <Subheading style={[styles.userCardName, styles.userCardAgeGen]}>
              M, 25
            </Subheading>
          </View>
          <View style={styles.userCardInfosecondrow}>
            <Subheading>Looking For FriendShip</Subheading>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <Pressable style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>SAVE</Text>
          </Pressable>
          <Pressable style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>VIEW</Text>
          </Pressable>
          <Pressable style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>LIKE</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  userCardInfo: {flex: 2, paddingHorizontal: 15},
  userCardInfofirstrow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    flex: 1,
  },
  userCardInfosecondrow: {
    flex: 1,
    justifyContent: 'center',
  },
  userCardName: {
    fontSize: 22,
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
  saveBtn: {
    borderWidth: 2,
    borderColor: Colors.thickTomato,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 26,
  },
  saveBtnText: {
    color: Colors.thickTomato,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
