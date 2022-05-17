import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useState, createContext, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthProvider';
import {UserInfoContext} from '../../screens/setupscreens/InitialSetup';
import {Avatar} from '../../components/Avatar';
import BottomButton from '../../components/BottomButton';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';

export const ImageContext = createContext({});

export default ProfilePicScreen = () => {
  const {
    userDisplayName,
    dob,
    height,
    gender,
    relationshipStatus,
    hereFor,
    interestedIn,
    ageRangeMin,
    ageRangeMax,
    city,
    country,
  } = useContext(UserInfoContext);
  const {user, logout, setIsSetupFinished} = useContext(AuthContext);
  const [imgUploaded, setImgUploaded] = useState(false);
  const [uploadedImgPath, setUploadedImgPath] = useState(null);
  const onAvatarChange = imagePath => {
    setUploadedImgPath(imagePath);
    // upload image to server here
  };
  function uploadData() {
    if (!imgUploaded) {
      alert('Please upload your profile picture!');
      return;
    }
    const uploadResult = uploadPhoto();
    if (uploadResult !== null) {
      if (saveUserData()) {
      }
    }
  }
  async function uploadPhoto() {
    const reference = storage().ref('ProfilePictures/' + user.uid + '.jpg');
    const task = reference.putFile(uploadedImgPath);
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    });
    task.then(() => {
      console.log('Image uploaded to the bucket!');
    });
    try {
      await task;
      const url = await reference.getDownloadURL();
      return url;
    } catch (e) {
      console.log('ERROR: ' + e);
      return null;
    }
  }

  const saveUserData = () => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .set({
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
        aboutMe: '',
        highestDegree: '',
        college: '',
        job: '',
        company: '',
        smoking: '',
        drinking: '',
        eatingHabits: '',
        exercise: '',
        wantKinds: '',
      })
      .then(() => {
        console.log('User updated!');
        setIsSetupFinished(true);
        return true;
      })
      .catch(e => {
        console.log('ERROR:' + e);
        return null;
      });
  };

  return (
    <View style={styles.scroll}>
      <View style={styles.userRow}>
        <ImageContext.Provider value={{imgUploaded, setImgUploaded}}>
          <Avatar
            onChange={onAvatarChange}
            source={require('../../media/avatar.png')}
          />
        </ImageContext.Provider>
      </View>
      <View style={styles.content}>
        <BottomButton label="FINISH" onPress={uploadData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    alignItems: 'center',
    padding: 10,
    margin: 70,
  },
  content: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
