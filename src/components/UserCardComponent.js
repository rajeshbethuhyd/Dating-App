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
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../Colors';
import {Subheading} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from './ActionButton';
import {AuthContext} from '../navigation/AuthProvider';
import {SendLike, UnSendLike} from '../HelperFunctions/SendLike';

export default function UserCardComponent({
  userInfo,
  navigation,
  loadingSentLikes,
}) {
  // console.log('loadingSentLikes');
  // console.log(loadingSentLikes);
  const [liked, setLiked] = useState();
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.CardSection}>
        <View style={styles.TopSection}>
          <Image
            source={{
              uri: userInfo.profilePicUrl,
            }}
            resizeMode="cover"
            style={styles.userCardImg}
          />
          <View style={styles.chatIconContainer}>
            <Pressable style={styles.chatIcon}>
              <MaterialIcons name="chat" color={Colors.white} size={33} />
            </Pressable>
          </View>
          <View style={styles.userCardInfo}>
            <View style={styles.userCardInfofirstrow}>
              <Subheading style={[styles.userCardName, styles.userInfoText]}>
                {userInfo.userDisplayName}
              </Subheading>
              <Subheading
                style={[
                  styles.userCardName,
                  styles.userCardAgeGen,
                  styles.userInfoText,
                ]}>
                {userInfo.gender === 'male' ? 'M' : 'F'}, {userInfo.age}
              </Subheading>
            </View>
            <View style={styles.userCardInfosecondrow}>
              <Subheading style={styles.userInfoText}>
                Looking For {userInfo.hereFor}
              </Subheading>
              <Subheading style={styles.userInfoText}>
                {userInfo.distance} kms away
              </Subheading>
            </View>
          </View>
        </View>
        <View style={styles.BottomSection}>
          <View style={styles.actionButtonsSection}>
            <View style={styles.actionButtonsContainer}>
              <View style={styles.viewButtonContainer}>
                <Pressable
                  style={styles.viewButton}
                  android_ripple={{color: Colors.primary, borderless: false}}
                  onPress={() =>
                    navigation.navigate('ViewProfileScreen', {
                      userInfo: userInfo,
                    })
                  }>
                  <Text style={styles.viewButtonText}>VIEW PROFILE</Text>
                </Pressable>
              </View>
              <View style={styles.likeBtnStyles}>
                <Pressable
                  onPress={() => {
                    // console.log(
                    //   'You ( ' + user.uid + ' ) Liked ' + userInfo.key,
                    // );
                    if (liked) {
                      setLiked(false);
                      UnSendLike(user.uid, userInfo.key);
                    } else {
                      setLiked(true);
                      SendLike(user.uid, userInfo.key);
                    }
                  }}
                  android_ripple={{color: Colors.primary, borderless: true}}>
                  <Icon
                    style={{paddingHorizontal: 13}}
                    name={liked ? 'heart' : 'heart-outline'}
                    color={Colors.primary}
                    size={30}
                  />
                </Pressable>
              </View>
            </View>
          </View>
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
    flexDirection: 'column',
  },
  TopSection: {
    flex: 9,
  },
  BottomSection: {
    flex: 2,
  },
  userCardImg: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  chatIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: '16%',
    paddingHorizontal: 15,
  },
  chatIcon: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: Colors.primary,
    padding: 12,
  },
  userCardInfo: {
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 10,
    bottom: 5,
    width: '100%',
  },
  userCardInfofirstrow: {
    justifyContent: 'space-between',
    alignItems: 'center',
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
  userInfoText: {
    color: Colors.white,
  },
  actionButtonsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    width: '60%',
  },
  viewButtonContainer: {
    flex: 1,
    borderWidth: 3,
    flexDirection: 'row',
    borderRadius: 32,
    borderColor: Colors.primary,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  viewButton: {
    padding: 15,
    flex: 3,
  },
  viewButtonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  likeBtnStyles: {
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
