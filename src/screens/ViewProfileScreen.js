import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Title, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FornAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyDivider from '../components/MyDivider';
import {Appbar} from 'react-native-paper';
import {Colors} from '../Colors';
import {LikesContext} from '../navigation/HomeScreenStack';
import {SendLike, UnSendLike} from '../HelperFunctions/SendLike';
import {AuthContext} from '../navigation/AuthProvider';

export default function ViewProfileScreen({navigation, route}) {
  const {user} = useContext(AuthContext);
  const [likeSent, setLikeSent] = useState(null);
  const {userInfo} = route.params;
  const {sentLikes} = useContext(LikesContext);
  const heightRes = userInfo.height.split('.');
  var height = '';
  if (heightRes.length > 1) {
    height = heightRes[0] + "' " + heightRes[1] + '"';
  } else {
    height = heightRes[0] + "' " + 0 + '"';
  }

  const [liked, setLiked] = useState();
  useEffect(() => {
    if (sentLikes[userInfo.key] === true) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  return (
    <>
      <Appbar.Header style={{backgroundColor: Colors.white}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View style={styles.likeBtn}>
        <Pressable
          onPress={() => {
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
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.profilePicView}>
          <Image
            style={styles.imageStyles}
            source={{
              uri: userInfo.profilePicUrl,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={[styles.rows, styles.firstRow]}>
            <View style={{flex: 4}}>
              <Title>{userInfo.userDisplayName}</Title>
              {userInfo.city && <Text>{userInfo.city}</Text>}
            </View>
            <View style={{flex: 1}}>
              <Title>
                {userInfo.gender === 'male' ? 'M' : 'F'}, {userInfo.age}
              </Title>
              <Text>{userInfo.relationshipStatus}</Text>
            </View>
          </View>
          {userInfo.bio && (
            <View style={[styles.secondRow, styles.rows]}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                {userInfo.bio}
              </Text>
            </View>
          )}
          <MyDivider />
          <View style={[styles.friendship, styles.rows]}>
            <Icon name="account-search" size={22} />
            <Text style={styles.textStyles}>{userInfo.hereFor}</Text>
          </View>
          <MyDivider />
          <View style={styles.rows}>
            <Icon name="human-male-height" size={22} />
            <Text style={styles.textStyles}>{height}</Text>
          </View>

          {(userInfo.highestDdegree || userInfo.cdollege) && (
            <>
              <MyDivider />
              <View style={[styles.rows, {marginVertical: 15}]}>
                <FornAwesomeIcon
                  name="graduation-cap"
                  size={19}
                  style={{width: 22, paddingTop: 3}}
                />
                <View>
                  {userInfo.highestDegree && (
                    <Text style={styles.textStyles}>
                      {userInfo.highestDegree}
                    </Text>
                  )}
                  {userInfo.college && (
                    <Text style={styles.textStyles}>{userInfo.college}</Text>
                  )}
                </View>
              </View>
            </>
          )}

          {(userInfo.job || userInfo.company) && (
            <>
              <MyDivider />
              <View style={[styles.rows, {marginVertical: 15}]}>
                <Icon name="briefcase" size={22} />
                <View>
                  {userInfo.job && (
                    <Text style={styles.textStyles}>{userInfo.job}</Text>
                  )}
                  {userInfo.company && (
                    <Text style={styles.textStyles}>{userInfo.company}</Text>
                  )}
                </View>
              </View>
            </>
          )}
          {userInfo.eatingHabits && (
            <>
              <MyDivider />
              <View style={styles.rows}>
                <Icon name="rice" size={22} />
                <Text style={styles.textStyles}>{userInfo.eatingHabits}</Text>
              </View>
            </>
          )}
          {userInfo.smoking && (
            <>
              <MyDivider />
              <View style={styles.rows}>
                <Icon name="smoking" size={22} />
                <Text style={styles.textStyles}>{userInfo.smoking}</Text>
              </View>
            </>
          )}
          {userInfo.drinking && (
            <>
              <MyDivider />
              <View style={styles.rows}>
                <Icon name="glass-wine" size={22} />
                <Text style={styles.textStyles}>{userInfo.drinking}</Text>
              </View>
            </>
          )}
          {userInfo.exercise && (
            <>
              <MyDivider />
              <View style={styles.rows}>
                <MaterialIcons name="fitness-center" size={22} />
                <Text style={styles.textStyles}>{userInfo.exercise}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  likeBtn: {
    height: 70,
    width: 70,
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
    right: '10%',
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyles: {
    height: 400,
    width: '100%',
  },
  detailsContainer: {
    paddingHorizontal: 15,
  },
  rows: {
    marginVertical: 10,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  secondRow: {},
  textStyles: {
    fontSize: 17,
    marginLeft: 10,
  },
});
