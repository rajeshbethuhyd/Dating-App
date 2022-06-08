import {
  StatusBar,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';

import {UserInfoContext} from '../../navigation/MainApp';
import {Subheading, Title} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../../Colors';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import BottomButton from '../../components/BottomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ProgressStepBar from '../../components/ProgressStepBar';
export default function BasicDetailsScreen({navigation}) {
  const {
    userDisplayName,
    setUserDisplayName,
    dob,
    setDob,
    height,
    setHeight,
    gender,
    setGender,
    relationshipStatus,
    setRelationshipStatus,
    hereFor,
    setHereFor,
    interestedIn,
    setInterestedIn,
    ageRangeMin,
    setAgeRangeMin,
    ageRangeMax,
    setAgeRangeMax,
    city,
    setCity,
    country,
    setCountry,
    cityCountry,
    setCityCountry,
  } = useContext(UserInfoContext);

  const [openDateModal, setOpenDateModal] = useState(false);
  const [openAgeModal, setOpenAgeModal] = useState(false);
  const [minAgePref, setMinAgePref] = useState(18);
  const [maxAgePref, setMaxAgePref] = useState(70);
  const [agePref, setAgePref] = useState();
  const [minTempAgePref, setMinTempAgePref] = useState(minAgePref);
  const [maxTempAgePref, setMaxTempAgePref] = useState(maxAgePref);

  function getMaxDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear() - 18;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    const maxDate = [year, month, day].join('-');
    return maxDate;
  }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  function validateForm() {
    if (
      userDisplayName === '' ||
      userDisplayName === null ||
      dob === '' ||
      dob === null ||
      height === '' ||
      height === null ||
      gender === '' ||
      gender === null ||
      relationshipStatus === '' ||
      relationshipStatus === null ||
      hereFor === '' ||
      hereFor === null ||
      interestedIn === '' ||
      interestedIn === null ||
      agePref === '' ||
      agePref === null
    ) {
      return false;
    }
    return true;
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBar backgroundColor={Colors.primary} />
      <ProgressStepBar current={1} total={4} />
      <ScrollView>
        <Subheading
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            fontSize: 18,
          }}>
          Hi, Let's setup your account.
        </Subheading>
        <View
          style={{
            paddingHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 15}}>* All fields are required.</Text>
        </View>
        <View style={styles.basicform}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Display Name"
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => setUserDisplayName(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              showSoftInputOnFocus={false}
              placeholder="Enter Date of birth"
              placeholderTextColor={Colors.placeholder}
              onPressIn={() => setOpenDateModal(true)}
              value={dob}
              // underlineColorAndroid={Colors.primary}
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
              onValueChange={value => setHeight(value)}
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
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => setGender(value)}
              useNativeAndroidPickerStyle={true}
              placeholder={{label: 'I am...', color: Colors.placeholder}}
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => setRelationshipStatus(value)}
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
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => setHereFor(value)}
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
            />
          </View>
          <View>
            <RNPickerSelect
              style={styles.selectpicker}
              onValueChange={value => setInterestedIn(value)}
              useNativeAndroidPickerStyle={true}
              placeholder={{
                label: "I'm Interested in...",
                color: Colors.placeholder,
              }}
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              showSoftInputOnFocus={false}
              placeholder="Age Preference..."
              value={agePref}
              placeholderTextColor={Colors.placeholder}
              onPressIn={() => setOpenAgeModal(true)}
              // underlineColorAndroid={Colors.primary}
            />
            <Modal isVisible={openAgeModal}>
              <View
                style={{
                  flex: 5,
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '98%',
                  height: '50%',
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  padding: 20,
                }}>
                <Title style={{flex: 1}}>Age Preference</Title>
                <View
                  style={{marginVertical: 30, flex: 2, alignItems: 'center'}}>
                  <MultiSlider
                    selectedStyle={{backgroundColor: Colors.primary}}
                    markerStyle={{backgroundColor: Colors.primary}}
                    values={[minAgePref, maxAgePref]}
                    sliderLength={280}
                    min={18}
                    max={70}
                    step={1}
                    onValuesChange={data => {
                      setMinTempAgePref(data[0]);
                      setMaxTempAgePref(data[1]);
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 15,
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    {minTempAgePref + ' - ' + maxTempAgePref}
                  </Text>
                </View>
                <View style={{flex: 2}}>
                  <Button
                    color={Colors.primary}
                    title="Confirm"
                    onPress={() => {
                      setAgeRangeMin(minTempAgePref);
                      setAgeRangeMax(maxTempAgePref);
                      setAgePref(minTempAgePref + ' - ' + maxTempAgePref);
                      setOpenAgeModal(false);
                    }}
                  />
                  <Pressable
                    style={{
                      alignSelf: 'center',
                      padding: 20,
                      marginTop: 5,
                    }}
                    onPress={() => {
                      setOpenAgeModal(false);
                    }}>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>
                      Cancel
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>

      <BottomButton
        onPress={() => {
          if (validateForm()) {
            navigation.navigate('CityScreen');
          } else {
            alert('All the fields are required.');
          }
        }}
        label="CONTINUE"
      />
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
});
