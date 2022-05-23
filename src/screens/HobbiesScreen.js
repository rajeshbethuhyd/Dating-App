import {
  View,
  ToastAndroid,
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Chip, Divider} from 'react-native-paper';

import {Colors} from '../Colors';

export default function HobbiesScreen() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const toggleHobby = item => {
    if (selectedHobbies.length == 10) {
      if (!selectedHobbies.includes(item)) {
        ToastAndroid.show('Maximum limit 10 reached', ToastAndroid.LONG);
        return;
      }
    }
    setSelectedHobbies(
      selectedHobbies.includes(item)
        ? selectedHobbies.filter(i => i !== item)
        : [...selectedHobbies, item],
    );
  };
  const isHobbySelected = value => {
    return selectedHobbies.includes(value);
  };
  const Hobby = ({value}) => (
    // <View style={styles.hobby}>
    <Chip
      mode="outlined"
      selected={isHobbySelected(value)}
      selectedColor={isHobbySelected(value) ? Colors.primary : 'grey'}
      onPress={() => toggleHobby(value)}>
      {value}
    </Chip>
    // </View>
  );

  const SelectedHobbies = () =>
    selectedHobbies.map(value => (
      <Chip
        mode="outlined"
        selected={isHobbySelected(value)}
        selectedColor={Colors.primary}>
        {value}
      </Chip>
    ));

  return (
    <ScrollView>
      <View style={styles.Container}>
        <SelectedHobbies />
      </View>
      <Divider />
      <View style={styles.Container}>
        <Chip
          mode="outlined"
          selected={isHobbySelected('TV Shows')}
          selectedColor={isHobbySelected('TV Shows') ? Colors.primary : 'grey'}
          onPress={() => toggleHobby('TV Shows')}>
          TV Shows
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Movies')}
          selectedColor={isHobbySelected('Movies') ? Colors.primary : 'grey'}
          onPress={() => toggleHobby('Movies')}>
          Movies
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Reading')}
          selectedColor={isHobbySelected('Reading') ? Colors.primary : 'grey'}
          onPress={() => toggleHobby('Reading')}>
          Reading
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Working Out')}
          selectedColor={
            isHobbySelected('Working Out') ? Colors.primary : 'grey'
          }
          onPress={() => toggleHobby('Working Out')}>
          Working Out
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Arts and Crafts')}
          selectedColor={
            isHobbySelected('Arts and Crafts') ? Colors.primary : 'grey'
          }
          onPress={() => toggleHobby('Arts and Crafts')}>
          Arts and Crafts
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Board Games')}
          selectedColor={
            isHobbySelected('Board Games') ? Colors.primary : 'grey'
          }
          onPress={() => toggleHobby('Board Games')}>
          Board Games
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Team Sports')}
          selectedColor={
            isHobbySelected('Team Sports') ? Colors.primary : 'grey'
          }
          onPress={() => toggleHobby('Team Sports')}>
          Team Sports
        </Chip>
        <Chip
          mode="outlined"
          selected={isHobbySelected('Yoga')}
          selectedColor={isHobbySelected('Yoga') ? Colors.primary : 'grey'}
          onPress={() => toggleHobby('Yoga')}>
          Yoga
        </Chip>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hobby: {
    margin: 2,
  },
});
