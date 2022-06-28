import {View, Text} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

export function SendLike(fromUser, toUser) {
  //Check Internet Connection
  database()
    .ref('/SentLikes/' + fromUser)
    .update({
      [toUser]: true,
    })
    .then()
    .catch(e => {
      console.log('Error: ' + e);
    });
  database()
    .ref('/ReceivedLikes/' + toUser)
    .update({
      [fromUser]: true,
    })
    .then()
    .catch(e => {
      console.log('Error: ' + e);
    });
}

export function UnSendLike(fromUser, toUser) {
  database()
    .ref('/SentLikes/' + fromUser + '/' + toUser)
    .remove()
    .then()
    .catch(e => {
      console.log('Error: ' + e);
    });
  database()
    .ref('/ReceivedLikes/' + toUser + '/' + fromUser)
    .remove()
    .then()
    .catch(e => {
      console.log('Error: ' + e);
    });
}
