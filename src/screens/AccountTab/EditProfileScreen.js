import {
  StatusBar,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Keyboard,
  Pressable,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState, useEffect, useLayoutEffect} from 'react';
import {UserInfoContext} from '../../navigation/MainApp';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../../Colors';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import BottomButton from '../../components/BottomButton';
import {getMaxDate, formatDate} from '../../HelperFunctions/DateFunctions';
import {Subheading, Appbar} from 'react-native-paper';
import SaveIcon from '../../components/SaveIcon';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthProvider';

export default function EditProfileScreen({navigation}) {
  const {user} = useContext(AuthContext);
  const {userData, editCity, setEditCity, editCountry, setEditCountry} =
    useContext(UserInfoContext);

  const [userDisplayName, setUserDisplayName] = useState(
    userData.userDisplayName,
  );
  const [dob, setDob] = useState(userData.dob);
  const [height, setHeight] = useState(userData.height);
  const [gender, setGender] = useState(userData.gender);
  const [relationshipStatus, setRelationshipStatus] = useState(
    userData.relationshipStatus,
  );
  const [hereFor, setHereFor] = useState(userData.hereFor);
  const [interestedIn, setInterestedIn] = useState(userData.interestedIn);
  const [ageRangeMin, setAgeRangeMin] = useState(userData.ageRangeMin);
  const [ageRangeMax, setAgeRangeMax] = useState(userData.ageRangeMax);
  const [city, setCity] = useState(userData.city);
  const [country, setCountry] = useState(userData.country);
  const [aboutMe, setAboutMe] = useState(userData.aboutMe);
  const [highestDegree, setHighestDegree] = useState(userData.highestDegree);
  const [college, setCollege] = useState(userData.college);
  const [job, setJob] = useState(userData.job);
  const [company, setCompany] = useState(userData.company);
  const [smoking, setSmoking] = useState(userData.smoking);
  const [drinking, setDrinking] = useState(userData.drinking);
  const [eatingHabits, setEatingHabits] = useState(userData.eatingHabits);
  const [exercise, setExercise] = useState(userData.exercise);
  const [wantKinds, setWantKinds] = useState(userData.wantKinds);

  const [openDateModal, setOpenDateModal] = useState(false);

  const validateForm = () => {
    if (
      userDisplayName === '' ||
      userDisplayName === undefined ||
      dob === '' ||
      dob === undefined ||
      height === '' ||
      height === undefined ||
      gender === '' ||
      gender === undefined ||
      relationshipStatus === '' ||
      relationshipStatus === undefined ||
      hereFor === '' ||
      hereFor === undefined
    ) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (editCity !== null) {
      setCity(editCity);
    }
  }, [editCity]);
  useEffect(() => {
    if (editCountry !== null) {
      setCountry(editCountry);
    }
  }, [editCountry]);

  const handleSubmit = () => {
    const result = validateForm();
    if (result !== true) {
      alert('Personal information cannot be empty');
      return;
    }

    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        userDisplayName: userDisplayName,
        dob: dob,
        height: height,
        gender: gender,
        relationshipStatus: relationshipStatus,
        hereFor: hereFor,
        interestedIn: interestedIn,
        ageRangeMin: ageRangeMin,
        ageRangeMax: ageRangeMax,
        city: city,
        country: country,
        aboutMe: aboutMe,
        highestDegree: highestDegree,
        college: college,
        job: job,
        company: company,
        smoking: smoking,
        drinking: drinking,
        eatingHabits: eatingHabits,
        exercise: exercise,
        wantKinds: wantKinds,
      })
      .then(() => {
        console.log('User updated!');
        ToastAndroid.show('Changes Saved!', ToastAndroid.SHORT);
        navigation.goBack();
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Appbar.Header style={{backgroundColor: Colors.white}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="check" onPress={handleSubmit} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.basicform}>
          <Subheading style={styles.subheadingstyles}>
            Personal Information <Text style={{color: 'red'}}>*</Text>
          </Subheading>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Display Name"
              placeholderTextColor={Colors.placeholder}
              maxLength={25}
              onChangeText={text => {
                setUserDisplayName(text);
              }}
              defaultValue={userDisplayName}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              showSoftInputOnFocus={false}
              placeholder="Enter Date of birth"
              placeholderTextColor={Colors.placeholder}
              onPressIn={() => {
                Keyboard.dismiss();
                setOpenDateModal(true);
              }}
              defaultValue={dob}
            />
            <DatePicker
              modal
              open={openDateModal}
              mode="date"
              title="Date of Birth"
              date={new Date(getMaxDate())}
              maximumDate={new Date(getMaxDate())}
              onConfirm={date => {
                setOpenDateModal(false);
                setDob(formatDate(date));
              }}
              onCancel={() => {
                setOpenDateModal(false);
              }}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setHeight(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'Height...', color: Colors.placeholder}}
              items={[
                {label: '1\' 5"', value: '1.5'},
                {label: '1\' 6"', value: '1.6'},
                {label: '1\' 7"', value: '1.7'},
                {label: '1\' 8"', value: '1.8'},
                {label: '1\' 9"', value: '1.9'},
                {label: '1\' 10"', value: '1.10'},
                {label: '1\' 11"', value: '1.11'},
                {label: '1\' 12"', value: '1.12'},
                {label: '2\' 0"', value: '2.0'},
                {label: '2\' 1"', value: '2.1'},
                {label: '2\' 2"', value: '2.2'},
                {label: '2\' 3"', value: '2.3'},
                {label: '2\' 4"', value: '2.4'},
                {label: '2\' 5"', value: '2.5'},
                {label: '2\' 6"', value: '2.6'},
                {label: '2\' 7"', value: '2.7'},
                {label: '2\' 8"', value: '2.8'},
                {label: '2\' 9"', value: '2.9'},
                {label: '2\' 10"', value: '2.10'},
                {label: '2\' 11"', value: '2.11'},
                {label: '2\' 12"', value: '2.12'},
                {label: '3\' 0"', value: '3.0'},
                {label: '3\' 1"', value: '3.1'},
                {label: '3\' 2"', value: '3.2'},
                {label: '3\' 3"', value: '3.3'},
                {label: '3\' 4"', value: '3.4'},
                {label: '3\' 5"', value: '3.5'},
                {label: '3\' 6"', value: '3.6'},
                {label: '3\' 7"', value: '3.7'},
                {label: '3\' 8"', value: '3.8'},
                {label: '3\' 9"', value: '3.9'},
                {label: '3\' 10"', value: '3.10'},
                {label: '3\' 11"', value: '3.11'},
                {label: '3\' 12"', value: '3.12'},
                {label: '4\' 0"', value: '4.0'},
                {label: '4\' 1"', value: '4.1'},
                {label: '4\' 2"', value: '4.2'},
                {label: '4\' 3"', value: '4.3'},
                {label: '4\' 4"', value: '4.4'},
                {label: '4\' 5"', value: '4.5'},
                {label: '4\' 6"', value: '4.6'},
                {label: '4\' 7"', value: '4.7'},
                {label: '4\' 8"', value: '4.8'},
                {label: '4\' 9"', value: '4.9'},
                {label: '4\' 10"', value: '4.10'},
                {label: '4\' 11"', value: '4.11'},
                {label: '4\' 12"', value: '4.12'},
                {label: '5\' 0"', value: '5.0'},
                {label: '5\' 1"', value: '5.1'},
                {label: '5\' 2"', value: '5.2'},
                {label: '5\' 3"', value: '5.3'},
                {label: '5\' 4"', value: '5.4'},
                {label: '5\' 5"', value: '5.5'},
                {label: '5\' 6"', value: '5.6'},
                {label: '5\' 7"', value: '5.7'},
                {label: '5\' 8"', value: '5.8'},
                {label: '5\' 9"', value: '5.9'},
                {label: '5\' 10"', value: '5.10'},
                {label: '5\' 11"', value: '5.11'},
                {label: '5\' 12"', value: '5.12'},
                {label: '6\' 0"', value: '6.0'},
                {label: '6\' 1"', value: '6.1'},
                {label: '6\' 2"', value: '6.2'},
                {label: '6\' 3"', value: '6.3'},
                {label: '6\' 4"', value: '6.4'},
                {label: '6\' 5"', value: '6.5'},
                {label: '6\' 6"', value: '6.6'},
                {label: '6\' 7"', value: '6.7'},
                {label: '6\' 8"', value: '6.8'},
                {label: '6\' 9"', value: '6.9'},
                {label: '6\' 10"', value: '6.10'},
                {label: '6\' 11"', value: '6.11'},
                {label: '6\' 12"', value: '6.12'},
                {label: '7\' 0"', value: '7.0'},
                {label: '7\' 1"', value: '7.1'},
                {label: '7\' 2"', value: '7.2'},
                {label: '7\' 3"', value: '7.3'},
                {label: '7\' 4"', value: '7.4'},
                {label: '7\' 5"', value: '7.5'},
                {label: '7\' 6"', value: '7.6'},
                {label: '7\' 7"', value: '7.7'},
                {label: '7\' 8"', value: '7.8'},
                {label: '7\' 9"', value: '7.9'},
                {label: '7\' 10"', value: '7.10'},
                {label: '7\' 11"', value: '7.11'},
                {label: '7\' 12"', value: '7.12'},
                {label: '8\' 0"', value: '8.0'},
                {label: '8\' 1"', value: '8.1'},
                {label: '8\' 2"', value: '8.2'},
                {label: '8\' 3"', value: '8.3'},
                {label: '8\' 4"', value: '8.4'},
                {label: '8\' 5"', value: '8.5'},
                {label: '8\' 6"', value: '8.6'},
                {label: '8\' 7"', value: '8.7'},
                {label: '8\' 8"', value: '8.8'},
                {label: '8\' 9"', value: '8.9'},
                {label: '8\' 10"', value: '8.10'},
                {label: '8\' 11"', value: '8.11'},
                {label: '8\' 12"', value: '8.12'},
                {label: '9\' 0"', value: '9.0'},
                {label: '9\' 1"', value: '9.1'},
                {label: '9\' 2"', value: '9.2'},
                {label: '9\' 3"', value: '9.3'},
                {label: '9\' 4"', value: '9.4'},
                {label: '9\' 5"', value: '9.5'},
                {label: '9\' 6"', value: '9.6'},
                {label: '9\' 7"', value: '9.7'},
                {label: '9\' 8"', value: '9.8'},
                {label: '9\' 9"', value: '9.9'},
                {label: '9\' 10"', value: '9.10'},
                {label: '9\' 11"', value: '9.11'},
                {label: '9\' 12"', value: '9.12'},
              ]}
              value={height}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setGender(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'I am...', color: Colors.placeholder}}
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'},
              ]}
              value={gender}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setRelationshipStatus(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{
                label: 'My Relationship Status...',
                color: Colors.placeholder,
              }}
              items={[
                {label: 'Single', value: 'single'},
                {label: 'Married', value: 'married'},
                {label: 'Divorced', value: 'divorced'},
                {label: 'Widowed', value: 'widowed'},
                {label: 'Dating', value: 'dating'},
              ]}
              value={relationshipStatus}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setHereFor(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{
                label: "I'm Here For...",
                color: Colors.placeholder,
              }}
              items={[
                {label: 'Relationship', value: 'relationship'},
                {label: 'Friendship', value: 'friendship'},
                {label: 'Something Casual', value: 'casual'},
              ]}
              value={hereFor}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>
            Place of Living
          </Subheading>
          <View>
            <TextInput
              style={styles.input}
              showSoftInputOnFocus={false}
              placeholder="City..."
              placeholderTextColor={Colors.placeholder}
              onPressIn={() => {
                navigation.navigate('EditCity');
              }}
              defaultValue={city}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>
            Short Description About You
          </Subheading>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Brief about you in 100 characters."
              multiline={true}
              numberOfLines={3}
              maxLength={100}
              onChangeText={text => {
                setAboutMe(text);
              }}
              defaultValue={aboutMe}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>Education</Subheading>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Highest Educational Qualification"
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => {
                setHighestDegree(text);
              }}
              defaultValue={highestDegree}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="College"
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => {
                setCollege(text);
              }}
              defaultValue={college}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>Profession</Subheading>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Job Role"
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => {
                setJob(text);
              }}
              defaultValue={job}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Company"
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => {
                setCompany(text);
              }}
              defaultValue={company}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>Food Habits</Subheading>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setEatingHabits(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'I am...', color: Colors.placeholder}}
              items={[
                {label: 'Vegetarian', value: 'veg'},
                {label: 'Non Vegetarian', value: 'nonveg'},
                {label: 'Other', value: 'other'},
              ]}
              value={eatingHabits}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setSmoking(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'Smoking?', color: Colors.placeholder}}
              items={[
                {label: 'Yes, I Do.', value: 'yes'},
                {label: 'Not at all', value: 'no'},
              ]}
              value={smoking}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setDrinking(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'Alcohol?', color: Colors.placeholder}}
              items={[
                {label: 'Yes.', value: 'yes'},
                {label: 'Not at all', value: 'no'},
              ]}
              value={drinking}
            />
          </View>
          <Subheading style={styles.subheadingstyles}>Fitness</Subheading>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => {
                setExercise(value);
              }}
              useNativeAndroidPickerStyle={true}
              placeholder={{
                label: 'How often do you workout?',
                color: Colors.placeholder,
              }}
              items={[
                {label: 'Regularly', value: 'regular'},
                {label: 'Occationally', value: 'rare'},
                {label: 'Never', value: 'never'},
              ]}
              value={exercise}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  basicform: {
    paddingHorizontal: 18,
  },
  input: {
    fontSize: 16,
    padding: 16,
  },
  selectpicker: {
    inputAndroid: {
      paddingVertical: 30,
    },
  },
  subheadingstyles: {
    marginTop: 15,
    fontSize: 18,
  },
});
