import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import BottomButton from '../../components/BottomButton.js';
import {Searchbar} from 'react-native-paper';
import {CitiesList} from '../../country-cities/world-major-cities.min.js';
import {Colors} from '../../Colors.js';
import {UserInfoContext} from '../../navigation/MainApp.js';

export default function EditCity({navigation}) {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const {editCity, setEditCity, editCountry, setEditCountry} =
    useContext(UserInfoContext);
  function fetchData(text) {
    var resultCities = CitiesList.filter(city => {
      return city.name.toLowerCase().includes(text.toLowerCase());
    });
    setResults(resultCities);
  }
  return (
    <View style={styles.container}>
      <Searchbar
        autoFocus={true}
        placeholder="Search City... min 3 characters"
        onChangeText={text => {
          setInput(text);
          if (text.length >= 3) {
            fetchData(text);
          }
        }}
        value={input}
      />
      <FlatList
        data={results}
        style={styles.flatliststyles}
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[highlighted && {marginLeft: 0}]} />
        )}
        keyboardShouldPersistTaps="always"
        renderItem={({item, index, separators}) => (
          <TouchableHighlight
            onPress={() => {
              setEditCity(item.name);
              setEditCountry(item.country);

              navigation.goBack();
            }}
            activeOpacity={0.6}
            underlayColor="#ddd"
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={styles.cityListItem}>
              <Text>{item.name + ', ' + item.country}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
      <Pressable
        android_ripple={{color: Colors.primary}}
        style={{
          width: '100%',
          height: 60,
          backgroundColor: Colors.white,
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text
          style={{
            color: Colors.primary,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          CANCEL
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatliststyles: {
    flex: 1,
    width: '100%',
  },
  cityListItem: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
});
