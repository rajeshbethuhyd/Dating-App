import {View, Button, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function HomeScreen() {
  const [currentUser, setcurrentUser] = useState(0);
  const [users, setUsers] = useState([]);

  const getNextTenUsers = () => {
    var length = users.length;
    for (let index = 1; index <= 10; index++) {
      console.log('last pushed value:' + (length + index));
      users.push(length + index);
    }
  };
  const prevUser = () => {
    console.log('\n PREV currentUser:' + currentUser);
    if (currentUser == 0) {
      return;
    }
    setcurrentUser(currentUser - 1);
  };
  const nextUser = () => {
    console.log('\n NEXT currentUser:' + currentUser);
    var signalIndex = users.length - 10;
    if (currentUser == signalIndex) {
      getNextTenUsers();
    }
    setcurrentUser(currentUser + 1);
    console.log('USERS');
    console.log(users);
  };
  useEffect(() => {
    if (currentUser == 0) {
      getNextTenUsers(currentUser);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={{fontWeight: '600', fontSize: 25}}>
          Current Index: {currentUser}
        </Text>
        <Text style={{fontWeight: '600', fontSize: 25}}>
          All Users in List: {users}
        </Text>
        <View style={styles.btns}>
          <Button title="Prev User" onPress={prevUser} />
          <Button title="Next User" onPress={nextUser} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subcontainer: {
    height: '50%',
    padding: 25,
  },
  btns: {
    marginVertical: 15,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
});
