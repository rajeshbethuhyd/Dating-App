import {
  View,
  ToastAndroid,
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Chip, Divider, Headline, Subheading, Title} from 'react-native-paper';

import {Colors} from '../../Colors';
import MyDivider from '../../components/MyDivider';
import BottomButton from '../../components/BottomButton';

export default function HobbiesScreen({navigation}) {
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

  const SelectedHobbies = () =>
    selectedHobbies.map((value, index) => (
      <Chip
        key={index}
        style={styles.hobby}
        mode="outlined"
        selected={isHobbySelected(value)}
        selectedColor={Colors.primary}>
        {value}
      </Chip>
    ));

  return (
    <>
      <View style={styles.Container}>
        <Title>Select Your Interests</Title>
        <View style={styles.interestContainer}>
          <SelectedHobbies />
        </View>
        {selectedHobbies.length > 0 && (
          <View style={{marginVertical: 10}}>
            <MyDivider />
          </View>
        )}
        <ScrollView>
          <View style={styles.interestContainer}>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('TV Shows')}
              selectedColor={
                isHobbySelected('TV Shows') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('TV Shows')}>
              TV Shows
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Movies')}
              selectedColor={
                isHobbySelected('Movies') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Movies')}>
              Movies
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Traveling')}
              selectedColor={
                isHobbySelected('Traveling') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Traveling')}>
              Traveling
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Reading')}
              selectedColor={
                isHobbySelected('Reading') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Reading')}>
              Reading
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Working Out')}
              selectedColor={
                isHobbySelected('Working Out') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Working Out')}>
              Working Out
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Arts and Crafts')}
              selectedColor={
                isHobbySelected('Arts and Crafts') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Arts and Crafts')}>
              Arts and Crafts
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Board Games')}
              selectedColor={
                isHobbySelected('Board Games') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Board Games')}>
              Board Games
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Team Sports')}
              selectedColor={
                isHobbySelected('Team Sports') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Team Sports')}>
              Team Sports
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Yoga')}
              selectedColor={isHobbySelected('Yoga') ? Colors.primary : 'grey'}
              onPress={() => toggleHobby('Yoga')}>
              Yoga
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Baking')}
              selectedColor={
                isHobbySelected('Baking') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Baking')}>
              Baking
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Gardening')}
              selectedColor={
                isHobbySelected('Gardening') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Gardening')}>
              Gardening
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Video Games')}
              selectedColor={
                isHobbySelected('Video Games') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Video Games')}>
              Video Games
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Meditation')}
              selectedColor={
                isHobbySelected('Meditation') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Meditation')}>
              Meditation
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Audiobooks')}
              selectedColor={
                isHobbySelected('Audiobooks') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Audiobooks')}>
              Audiobooks
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Podcasts')}
              selectedColor={
                isHobbySelected('Podcasts') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Podcasts')}>
              Podcasts
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Writing')}
              selectedColor={
                isHobbySelected('Writing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Writing')}>
              Writing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Learning a Language')}
              selectedColor={
                isHobbySelected('Learning a Language') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Learning a Language')}>
              Learning a Language
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Learning an Instrument')}
              selectedColor={
                isHobbySelected('Learning an Instrument')
                  ? Colors.primary
                  : 'grey'
              }
              onPress={() => toggleHobby('Learning an Instrument')}>
              Learning an Instrument
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Martial Arts')}
              selectedColor={
                isHobbySelected('Martial Arts') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Martial Arts')}>
              Martial Arts
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Jewelry Making')}
              selectedColor={
                isHobbySelected('Jewelry Making') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Jewelry Making')}>
              Jewelry Making
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Woodworking')}
              selectedColor={
                isHobbySelected('Woodworking') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Woodworking')}>
              Woodworking
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Fishing')}
              selectedColor={
                isHobbySelected('Fishing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Fishing')}>
              Fishing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Walking')}
              selectedColor={
                isHobbySelected('Walking') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Walking')}>
              Walking
            </Chip>

            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Golf')}
              selectedColor={isHobbySelected('Golf') ? Colors.primary : 'grey'}
              onPress={() => toggleHobby('Golf')}>
              Golf
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Watching Sports')}
              selectedColor={
                isHobbySelected('Watching Sports') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Watching Sports')}>
              Watching Sports
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Playing Cards')}
              selectedColor={
                isHobbySelected('Playing Cards') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Playing Cards')}>
              Playing Cards
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Dining out')}
              selectedColor={
                isHobbySelected('Dining out') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Dining out')}>
              Dining out
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Running')}
              selectedColor={
                isHobbySelected('Running') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Running')}>
              Running
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Tennis')}
              selectedColor={
                isHobbySelected('Tennis') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Tennis')}>
              Tennis
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Volunteering')}
              selectedColor={
                isHobbySelected('Volunteering') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Volunteering')}>
              Volunteering
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Dancing')}
              selectedColor={
                isHobbySelected('Dancing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Dancing')}>
              Dancing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Painting')}
              selectedColor={
                isHobbySelected('Painting') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Painting')}>
              Painting
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Cooking')}
              selectedColor={
                isHobbySelected('Cooking') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Cooking')}>
              Cooking
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Collecting Antiques')}
              selectedColor={
                isHobbySelected('Collecting Antiques') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Collecting Antiques')}>
              Collecting Antiques
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Bicycling')}
              selectedColor={
                isHobbySelected('Bicycling') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Bicycling')}>
              Bicycling
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Housework')}
              selectedColor={
                isHobbySelected('Housework') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Housework')}>
              Housework
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Genealogy')}
              selectedColor={
                isHobbySelected('Genealogy') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Genealogy')}>
              Genealogy
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Church Activities')}
              selectedColor={
                isHobbySelected('Church Activities') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Church Activities')}>
              Church Activities
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Calligraphy')}
              selectedColor={
                isHobbySelected('Calligraphy') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Calligraphy')}>
              Calligraphy
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Singing')}
              selectedColor={
                isHobbySelected('Singing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Singing')}>
              Singing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Music')}
              selectedColor={isHobbySelected('Music') ? Colors.primary : 'grey'}
              onPress={() => toggleHobby('Music')}>
              Music
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Skiing')}
              selectedColor={
                isHobbySelected('Skiing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Skiing')}>
              Skiing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Quilting')}
              selectedColor={
                isHobbySelected('Quilting') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Quilting')}>
              Quilting
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Snowboarding')}
              selectedColor={
                isHobbySelected('Snowboarding') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Snowboarding')}>
              Snowboarding
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Shopping')}
              selectedColor={
                isHobbySelected('Shopping') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Shopping')}>
              Shopping
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Socializing')}
              selectedColor={
                isHobbySelected('Socializing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Socializing')}>
              Socializing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Bird Watching')}
              selectedColor={
                isHobbySelected('Bird Watching') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Bird Watching')}>
              Bird Watching
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Pottery')}
              selectedColor={
                isHobbySelected('Pottery') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Pottery')}>
              Pottery
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Keeping a Scrapbook')}
              selectedColor={
                isHobbySelected('Keeping a Scrapbook') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Keeping a Scrapbook')}>
              Keeping a Scrapbook
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Photography')}
              selectedColor={
                isHobbySelected('Photography') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Photography')}>
              Photography
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Swimming')}
              selectedColor={
                isHobbySelected('Swimming') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Swimming')}>
              Swimming
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Home Brewing Beer')}
              selectedColor={
                isHobbySelected('Home Brewing Beer') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Home Brewing Beer')}>
              Home Brewing Beer
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Wine Tasting')}
              selectedColor={
                isHobbySelected('Wine Tasting') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Wine Tasting')}>
              Wine Tasting
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Knitting')}
              selectedColor={
                isHobbySelected('Knitting') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Knitting')}>
              Knitting
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Hiking')}
              selectedColor={
                isHobbySelected('Hiking') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Hiking')}>
              Hiking
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Floral design')}
              selectedColor={
                isHobbySelected('Floral design') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Floral design')}>
              Floral design
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Bike Riding')}
              selectedColor={
                isHobbySelected('Bike Riding') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Bike Riding')}>
              Bike Riding
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Scuba Diving')}
              selectedColor={
                isHobbySelected('Scuba Diving') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Scuba Diving')}>
              Scuba Diving
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Origami')}
              selectedColor={
                isHobbySelected('Origami') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Origami')}>
              Origami
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Cake Decorating')}
              selectedColor={
                isHobbySelected('Cake Decorating') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Cake Decorating')}>
              Cake Decorating
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Rock Climbing')}
              selectedColor={
                isHobbySelected('Rock Climbing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Rock Climbing')}>
              Rock Climbing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Archery')}
              selectedColor={
                isHobbySelected('Archery') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Archery')}>
              Archery
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Drawing')}
              selectedColor={
                isHobbySelected('Drawing') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Drawing')}>
              Drawing
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Interior Decorating')}
              selectedColor={
                isHobbySelected('Interior Decorating') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Interior Decorating')}>
              Interior Decorating
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Boating')}
              selectedColor={
                isHobbySelected('Boating') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Boating')}>
              Boating
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Choreography')}
              selectedColor={
                isHobbySelected('Choreography') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Choreography')}>
              Choreography
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Drama')}
              selectedColor={isHobbySelected('Drama') ? Colors.primary : 'grey'}
              onPress={() => toggleHobby('Drama')}>
              Drama
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Pets')}
              selectedColor={isHobbySelected('Pets') ? Colors.primary : 'grey'}
              onPress={() => toggleHobby('Pets')}>
              Pets
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Computers')}
              selectedColor={
                isHobbySelected('Computers') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Computers')}>
              Computers
            </Chip>
            <Chip
              style={styles.hobby}
              mode="outlined"
              selected={isHobbySelected('Technology')}
              selectedColor={
                isHobbySelected('Technology') ? Colors.primary : 'grey'
              }
              onPress={() => toggleHobby('Technology')}>
              Technology
            </Chip>
          </View>
        </ScrollView>
      </View>
      <BottomButton
        label="CONTINUE"
        onPress={() => {
          navigation.navigate('ZeroTolerance');
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15,
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  selectedInterestContainer: {},
  hobby: {
    margin: 2,
  },
});
