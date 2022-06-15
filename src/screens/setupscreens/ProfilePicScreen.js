import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useState, createContext, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import {AuthContext} from '../../navigation/AuthProvider';
import {UserInfoContext} from '../../navigation/MainApp';
import {Avatar} from '../../components/Avatar';
import {Subheading, Title} from 'react-native-paper';
import Modal from 'react-native-modal';
import BottomButton from '../../components/BottomButton';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Colors';
import {GeoFire} from 'geofire';
import ProgressStepBar from '../../components/ProgressStepBar';
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
    aboutMe,
    highestDegree,
    college,
    job,
    company,
    smoking,
    drinking,
    eatingHabits,
    exercise,
    hobbies,
    userData,
    setUserData,
    setIsSetupFinished,
    location,
    setLocation,
  } = useContext(UserInfoContext);
  const {user, logout} = useContext(AuthContext);
  const [imgUploaded, setImgUploaded] = useState(false);
  const [pic1Uploaded, setPic1Uploaded] = useState(null);
  const [pic2Uploaded, setPic2Uploaded] = useState(null);
  const [pic3Uploaded, setPic3Uploaded] = useState(null);
  const [uploadedImgPath, setUploadedImgPath] = useState(null);
  const [otherPics, setOtherPics] = useState([]);
  const [uri, setUri] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isProfilePic, setIsProfilePic] = useState(true);
  var profilePicUrl = null;

  const close = () => setVisible(false);
  const open = () => setVisible(true);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
    })
      .then(image => {
        if (isProfilePic) {
          setUri(image.path);
          setImgUploaded(true);
          setUploadedImgPath(image.path);
        } else {
          if (pic1Uploaded === null) {
            setPic1Uploaded(image.path);
          } else if (pic2Uploaded === null) {
            setPic2Uploaded(image.path);
          } else if (pic3Uploaded === null) {
            setPic3Uploaded(image.path);
          }
        }
      })
      .catch(e => {})
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
    })
      .then(image => {
        if (isProfilePic) {
          setUri(image.path);
          setImgUploaded(true);
          setUploadedImgPath(image.path);
        } else {
          if (pic1Uploaded === null) {
            setPic1Uploaded(image.path);
          } else if (pic2Uploaded === null) {
            setPic2Uploaded(image.path);
          } else if (pic3Uploaded === null) {
            setPic3Uploaded(image.path);
          }
        }
      })
      .catch(e => {})
      .finally(close);
  };

  async function uploadData() {
    if (!imgUploaded) {
      alert('Please upload your profile picture!');
      return;
    }
    const downloadUrl = await uploadPhoto(uri, '1');
    if (downloadUrl !== null) {
      console.log('downloadUrl');
      console.log(downloadUrl);
      profilePicUrl = downloadUrl;
      saveUserData();
    }
  }
  async function uploadPhoto(pic_uri, file_name) {
    const reference = storage().ref(
      'ProfilePictures/' + user.uid + '/' + file_name + '.jpg',
    );
    const task = reference.putFile(pic_uri); //Change to uri
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
      let downloadUrl = await reference.getDownloadURL();
      return downloadUrl;
    } catch (e) {
      console.log('ERROR: ' + e);
      return null;
    }
  }

  const saveUserData = () => {
    database()
      .ref('/Users/' + user.uid)
      .set({
        userDisplayName: userDisplayName,
        profilePicUrl: profilePicUrl,
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
        hobbies: hobbies,
        aboutMe: aboutMe,
        highestDegree: highestDegree,
        college: college,
        job: job,
        company: company,
        smoking: smoking,
        drinking: drinking,
        eatingHabits: eatingHabits,
        exercise: exercise,
        location: location,
      })
      .then(() => {
        hobbies.map(val => {
          database()
            .ref('/Interests/' + val)
            .push(user.uid)
            .then(() => console.log('Data updated.'));
        });
        if (location !== null) {
          const geoFireRef = new GeoFire(database().ref('/geoData/'));
          geoFireRef.set(user.uid, [location.latitude, location.longitude]);
        }

        console.log('User updated!');
        setIsSetupFinished(true);
        return true;
      })
      .catch(e => {
        console.log('ERROR:' + e);
        return false;
      });
  };

  return (
    <>
      <ProgressStepBar current={4} total={4} />
      <View style={styles.Container}>
        <Title>Profile Picture</Title>
        <View style={styles.userRow}>
          <TouchableOpacity
            onPress={() => {
              setIsProfilePic(true);
              setVisible(true);
            }}>
            <Image
              style={styles.avatar}
              source={uri ? {uri} : require('../../media/avatar.png')}
            />
            <Icon
              name="camera"
              size={25}
              color={Colors.white}
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                height: 45,
                width: 45,
                backgroundColor: Colors.primary,
                borderRadius: 30,
                paddingHorizontal: 10,
                paddingVertical: 9,
              }}
            />
          </TouchableOpacity>
          <Modal
            isVisible={visible}
            onBackButtonPress={close}
            onBackdropPress={close}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View style={styles.uploadModal}>
              <Title style={styles.modalTitle}>Upload Photo</Title>
              <View style={styles.options}>
                <TouchableHighlight
                  style={[styles.option, styles.touchableStyleLibrary]}
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={chooseImage}>
                  <View>
                    <Icon name="image" size={38} />
                    <Text>Library </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.option, styles.touchableStyleCamera]}
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={openCamera}>
                  <View>
                    <Icon name="camera" size={40} />
                    <Text>Camera</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <Title>Add More Photos</Title>
        <View style={styles.content}>
          <View style={styles.pic}>
            {pic1Uploaded === null && (
              <TouchableOpacity
                onPress={() => {
                  setIsProfilePic(false);
                  setVisible(true);
                }}>
                <Icon name="image-plus" size={35} style={{padding: '20%'}} />
              </TouchableOpacity>
            )}
            {pic1Uploaded !== null && (
              <Image style={styles.picstyles} source={{uri: pic1Uploaded}} />
            )}
            {pic1Uploaded !== null && (
              <Icon
                style={styles.deletePicIcon}
                name="close"
                size={27}
                color={Colors.white}
                onPress={() => {
                  setPic1Uploaded(pic2Uploaded);
                  setPic2Uploaded(pic3Uploaded);
                  setPic3Uploaded(null);
                }}
              />
            )}
          </View>
          <View style={styles.pic}>
            {pic2Uploaded === null && (
              <TouchableOpacity
                onPress={() => {
                  setIsProfilePic(false);
                  setVisible(true);
                }}>
                <Icon name="image-plus" size={35} style={{padding: '20%'}} />
              </TouchableOpacity>
            )}
            {pic2Uploaded !== null && (
              <Image style={styles.picstyles} source={{uri: pic2Uploaded}} />
            )}
            {pic2Uploaded !== null && (
              <Icon
                style={styles.deletePicIcon}
                name="close"
                size={27}
                color={Colors.white}
                onPress={() => {
                  setPic2Uploaded(pic3Uploaded);
                  setPic3Uploaded(null);
                }}
              />
            )}
          </View>
          <View style={styles.pic}>
            {pic3Uploaded === null && (
              <TouchableOpacity
                onPress={() => {
                  setIsProfilePic(false);
                  setVisible(true);
                }}>
                <Icon name="image-plus" size={35} style={{padding: '20%'}} />
              </TouchableOpacity>
            )}
            {pic3Uploaded !== null && (
              <Image style={styles.picstyles} source={{uri: pic3Uploaded}} />
            )}
            {pic3Uploaded !== null && (
              <Icon
                style={styles.deletePicIcon}
                name="close"
                size={27}
                color={Colors.white}
                onPress={() => {
                  setPic3Uploaded(null);
                }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.finishBtn}>
        <BottomButton label="FINISH" onPress={uploadData} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    padding: 20,
  },
  uploadModal: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'column',
    height: '25%',
  },
  modalTitle: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  options: {
    flexDirection: 'row',
    flex: 1,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 15,
  },
  userRow: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  pic: {
    backgroundColor: Colors.ligthgrey2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  picstyles: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  deletePicIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: Colors.red,
    borderRadius: 20,
    padding: 1,
  },
  finishBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
