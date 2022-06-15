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

export default function HomeScreen() {
  const {user} = useContext(AuthContext);
  const [allUserList, setAllUserList] = useState([]);
  const [finalUserList, setFinalUserList] = useState([]);
  const [tempUserList, setTempUserList] = useState([]);
  var totalUserCount = 0;
  var currentUser = 0;
  var userList = [];
  useEffect(() => {
    getUsersList();
  }, []);

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
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'View 1',
    },
    {
      id: '2',
      name: 'View 2',
    },
    {
      id: '3',
      name: 'View 3',
    },
    {
      id: '4',
      name: 'View 4',
    },
    {
      id: '5',
      name: 'View 5',
    },
    {
      id: '6',
      name: 'View 6',
    },
    {
      id: '7',
      name: 'View 7',
    },
    {
      id: '8',
      name: 'View 8',
    },
    {
      id: '9',
      name: 'View 9',
    },
    {
      id: '10',
      name: 'View 10',
    },
    {
      id: '11',
      name: 'View 11',
    },
  ]);

  const loadData = () => {};
  if (allUserList.length == 0) {
    return <Text>Loading</Text>;
  } else {
    totalUserCount = allUserList.length;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Appbar.Header style={{backgroundColor: Colors.white, zIndex: 100}}>
          <Appbar.Content title="Discover" />
        </Appbar.Header>
        <View style={styles.container}>
          <FlatList
            data={allUserList}
            renderItem={({item}) => <UserCardComponent userInfo={item} />}
            onEndReachedThreshold={5}
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
