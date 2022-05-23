import {StyleSheet, View, StatusBar, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import UserCardComponent from '../components/UserCardComponent';
import {Appbar} from 'react-native-paper';
import {Colors} from '../Colors';

export default function HomeScreen() {
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
  ]);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Appbar.Header style={{backgroundColor: Colors.white, zIndex: 100}}>
        <Appbar.Content title="Discover" />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => <UserCardComponent name={item.name} />}
          keyExtractor={item => item.id}
          snapToAlignment="center"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -StatusBar.currentHeight,
  },
});
