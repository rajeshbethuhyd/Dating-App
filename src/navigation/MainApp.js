import React, {useState, useContext, createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './AuthProvider';
import {View, Button, Text, Pressable} from 'react-native';
import {Colors} from '../Colors';
import BasicDetailsScreen from '../screens/setupscreens/BasicDetailsScreen';
import CityScreen from '../screens/setupscreens/CityScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePicScreen from '../screens/setupscreens/ProfilePicScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export const UserInfoContext = createContext({});

export default function MainApp() {
  const {user, logout} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isSetupFinished, setIsSetupFinished] = useState(null);

  const [userDisplayName, setUserDisplayName] = useState(null);
  const [dob, setDob] = useState(null);
  const [height, setHeight] = useState(null);
  const [gender, setGender] = useState(null);
  const [relationshipStatus, setRelationshipStatus] = useState(null);
  const [hereFor, setHereFor] = useState(null);
  const [interestedIn, setInterestedIn] = useState(null);
  const [ageRangeMin, setAgeRangeMin] = useState(null);
  const [ageRangeMax, setAgeRangeMax] = useState(null);
  const [cityCountry, setCityCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [highestDegree, setHighestDegree] = useState(null);
  const [college, setCollege] = useState(null);
  const [job, setJob] = useState(null);
  const [company, setCompany] = useState(null);
  const [smoking, setSmoking] = useState(null);
  const [drinking, setDrinking] = useState(null);
  const [eatingHabits, setEatingHabits] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [wantKinds, setWantKinds] = useState(null);

  const [editCity, setEditCity] = useState(null);
  const [editCountry, setEditCountry] = useState(null);

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(Doc => {
        if (Doc.exists) {
          setUserData(Doc.data());
          setIsSetupFinished(true);
        } else if (!Doc.exists) {
          setIsSetupFinished(false);
        }
      })
      .catch(e => {
        console.log('Error:' + e);
      });
  }, []);

  if (isSetupFinished === null) {
    console.log('NULL CASE TRIGGERED');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} color={Colors.primary} />
      </View>
    );
  } else if (isSetupFinished === true) {
    return (
      <UserInfoContext.Provider
        value={{userData, editCity, setEditCity, editCountry, setEditCountry}}>
        <Tab.Navigator
          activeColor={Colors.white}
          barStyle={{backgroundColor: Colors.primary}}
          initialRouteName="Account"
          labeled={false}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: 'My Account',
              tabBarIcon: ({color}) => (
                <Icons name="person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </UserInfoContext.Provider>
    );
  } else if (isSetupFinished === false) {
    return (
      <UserInfoContext.Provider
        value={{
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
          aboutMe,
          setAboutMe,
          highestDegree,
          setHighestDegree,
          college,
          setCollege,
          job,
          setJob,
          company,
          setCompany,
          smoking,
          setSmoking,
          drinking,
          setDrinking,
          eatingHabits,
          setEatingHabits,
          exercise,
          setExercise,
          wantKinds,
          setWantKinds,
          isSetupFinished,
          setIsSetupFinished,
        }}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="BasicDetailsScreen"
            component={BasicDetailsScreen}
            options={{
              headerTitle: 'Basic Deatils',
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              headerRight: () => (
                <Pressable
                  onPress={logout}
                  android_ripple={{color: '#cbdccb', borderless: false}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '600',
                      fontSize: 18,
                      padding: 10,
                    }}>
                    Cancel
                  </Text>
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="CityScreen"
            component={CityScreen}
            options={{
              headerTitle: 'Enter Your City',
              headerStyle: {backgroundColor: Colors.primary},
              headerShown: false,
              headerTintColor: Colors.white,
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="ProfilePicScreen"
            component={ProfilePicScreen}
            options={{
              headerTitle: 'Profile Picture',
              headerStyle: {backgroundColor: Colors.primary},
              headerShown: true,
              headerTintColor: Colors.white,
              animation: 'slide_from_right',
            }}
          />
        </Stack.Navigator>
      </UserInfoContext.Provider>
    );
  }
}
