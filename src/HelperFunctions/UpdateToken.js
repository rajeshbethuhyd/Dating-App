import messaging from '@react-native-firebase/messaging';
import database from '@react-native-firebase/database';
export default async function UpdateToken(userId) {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();
  // Get the token
  const token = await messaging().getToken();
  // Save the token
  database()
    .ref('/Users/' + userId)
    .update({
      token: token,
    })
    .then(() => console.log('Token updated.'))
    .catch(e => {
      console.log('Error: ' + e);
    });
}
