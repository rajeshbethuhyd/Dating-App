import React, {useState, useContext, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Keyboard,
  FlatList,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import BottomButton from '../../components/BottomButton';
import {Appbar, Searchbar} from 'react-native-paper';
import {CitiesList} from '../../country-cities/world-major-cities.min.js';
import {UserInfoContext} from '../../navigation/MainApp';
import {Colors} from '../../Colors';
import ProgressStepBar from '../../components/ProgressStepBar';

export default function CityScreen({navigation}) {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [noresults, setNoresults] = useState(false);
  const {city, setCity, country, setCountry} = useContext(UserInfoContext);
  function fetchData(text) {
    var resultCities = CitiesList.filter(city => {
      return city.name.toLowerCase().includes(text.toLowerCase());
    });
    if (resultCities.length === 0) {
      setNoresults(true);
    } else {
      setNoresults(false);
    }
    setResults(resultCities);
  }
  useEffect(() => {
    if (input === '') {
      setNoresults(false);
      setCity(null);
      setCountry(null);
    }
  }, [input]);

  const clearCity = () => {
    setInput('');
    setCity(null);
    setCountry(null);
    setResults([]);
    setNoresults(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <StatusBar barStyle="default" />
      {/* <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Your City" />
      </Appbar.Header> */}
      <ProgressStepBar current={2} total={4} />
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
                setCity(item.name);
                setCountry(item.country);
                setInput(item.name + ', ' + item.country);
                setResults([]);
                Keyboard.dismiss();
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
        {noresults && (
          <View style={styles.noresultsContainer}>
            <Text style={styles.noresultsText}>No Search Results...</Text>
          </View>
        )}

        <Pressable
          android_ripple={{color: Colors.white}}
          style={{
            width: '100%',
            height: 60,
            backgroundColor: Colors.primary,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('HobbiesScreen');
          }}>
          <Text
            style={{
              color: Colors.white,
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            CONTINUE
          </Text>
        </Pressable>
      </View>
    </>
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
  noresultsContainer: {
    position: 'absolute',
  },
  noresultsText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
