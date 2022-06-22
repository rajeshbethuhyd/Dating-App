import React, {useContext, useEffect, useState} from 'react';

import {
  ActivityIndicator,
  View,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import UserCardComponent from '../components/UserCardComponent';
import GetUserInfo from '../HelperFunctions/GetUserInfo';
import {AuthContext} from '../navigation/AuthProvider';

export default function LocationTest() {
  const {user} = useContext(AuthContext);
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState([]);
  const [JSON, setJSON] = useState([
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
    {
      id: '12',
      name: 'View 12',
    },
    {
      id: '13',
      name: 'View 13',
    },
    {
      id: '14',
      name: 'View 14',
    },
    {
      id: '15',
      name: 'View 15',
    },
    {
      id: '16',
      name: 'View 16',
    },
    {
      id: '17',
      name: 'View 17',
    },
    {
      id: '18',
      name: 'View 18',
    },
    {
      id: '19',
      name: 'View 19',
    },
    {
      id: '20',
      name: 'View 20',
    },
    {
      id: '21',
      name: 'View 21',
    },
    {
      id: '22',
      name: 'View 22',
    },
    {
      id: '23',
      name: 'View 23',
    },
    {
      id: '24',
      name: 'View 24',
    },
  ]);
  useEffect(() => {
    loadData();
  }, []);

  const [loadingIndicator, setLoadingIndicator] = useState(true);

  const ListItemRender = ({title}) => (
    <View style={styleSheet.listItem}>
      <Text style={styleSheet.itemText}> {title} </Text>
    </View>
  );

  const loadData = () => {
    const res = JSON.slice(offset * 5, (offset + 1) * 5);
    // GetUserInfo(res);
    const merged = [...list, ...res];
    setList(merged);
    setOffset(offset + 1);
  };
  if (list.length === 0) {
    return <Text>LOADING DATA</Text>;
  } else {
    return (
      <SafeAreaView style={styleSheet.MainContainer}>
        <FlatList
          data={list}
          onEndReachedThreshold={2}
          onEndReached={loadData}
          renderItem={({item}) => <ListItemRender title={item.name} />}
          keyExtractor={item => item.id}
          snapToAlignment="center"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={onRefresh}
          //     onRefresh={loadAgain}
          //     progressViewOffset={100}
          //   />
          // }
        />
      </SafeAreaView>
    );
  }
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  listItem: {
    paddingVertical: 50,
    paddingLeft: 10,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemText: {
    fontSize: 24,
    color: 'black',
  },
});
