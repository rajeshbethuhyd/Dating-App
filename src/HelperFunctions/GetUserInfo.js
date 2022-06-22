import {View, Text} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {getAge} from './DateFunctions';

export default async function GetUserInfo(userIdsList) {
  const result = await Promise.all(userIdsList.map(item => getUserData(item)));
  return result;
}
async function getUserData(item) {
  var userData = {};
  userData = await database()
    .ref('Users/' + item.key)
    .once('value');
  userData = JSON.parse(JSON.stringify(userData));
  userData.distance = item.distance;
  userData.key = item.key;
  userData.age = getAge(userData.dob);
  return userData;
}
