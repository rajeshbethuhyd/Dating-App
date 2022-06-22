import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import React, {useState, useEffect, useContext} from 'react';
import UserCardComponent from '../components/UserCardComponent';
import {Appbar} from 'react-native-paper';
import database from '@react-native-firebase/database';
import {Colors} from '../Colors';
import {GeoFire} from 'geofire';
import GetUserInfo from '../HelperFunctions/GetUserInfo';

export default function HomeScreen({navigation}) {
  const {user} = useContext(AuthContext);
  const [allUserList, setAllUserList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [finalUserList, setFinalUserList] = useState([]);
  const [tempUserList, setTempUserList] = useState([]);
  const [loadingSentLikes, setLoadingSentLikes] = useState(true);
  const [sentLikes, setSentLikes] = useState([]);

  var userList = [];
  useEffect(() => {
    getUsersList();
  }, []);

  useEffect(() => {
    const onValueChange = database()
      .ref(`/SentLikes/${user.uid}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setSentLikes(snapshot.val());
        setLoadingSentLikes(false);
      });

    // Stop listening for updates when no longer required
    return () =>
      database().ref(`/SentLikes/${user.uid}`).off('value', onValueChange);
  }, []);

  useEffect(() => {
    if (offset == 0) {
      loadData();
    }
  }, [allUserList]);

  const getUsersList = async () => {
    const geoFireRef = new GeoFire(database().ref('/geoData/'));
    const my_curr_location = await geoFireRef.get(user.uid);
    const geoQuery = geoFireRef.query({
      center: my_curr_location,
      radius: 2000,
    });
    geoQuery.on('key_entered', (key, location, distance) => {
      pushToList(key, distance);
    });
    geoQuery.on('ready', function () {
      userList.sort((a, b) => a.distance - b.distance);
      setAllUserList(userList);
    });
    function pushToList(key, dist) {
      const distance = Math.round(dist * 10) / 10;
      userList.push({key, distance});
    }
  };

  function loadData() {
    if (allUserList.length === 0) {
      return;
    }
    const res = allUserList.slice(offset * 2, (offset + 1) * 2);
    GetUserInfo(res)
      .then(UserInfoArray => {
        const merged = [...finalUserList, ...UserInfoArray];
        setOffset(offset + 1);
        setFinalUserList(merged);
      })
      .catch(e => {
        console.log('Error: ' + e);
      });
  }
  if (finalUserList.length == 0) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Appbar.Header style={{backgroundColor: Colors.white, zIndex: 100}}>
          <Appbar.Content title="Discover" />
        </Appbar.Header>
        <View style={styles.container}>
          <FlatList
            data={finalUserList}
            renderItem={({item}) => (
              <UserCardComponent
                loadingSentLikes={loadingSentLikes}
                userInfo={item}
                navigation={navigation}
              />
            )}
            onEndReachedThreshold={1}
            onEndReached={loadData}
            keyExtractor={item => item.key}
            snapToAlignment="center"
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -StatusBar.currentHeight,
  },
});
