import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Colors';
import {ImageContext} from '../screens/setupscreens/ProfilePicScreen';

export const Avatar = props => {
  const {setImgUploaded} = useContext(ImageContext);
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);

  //Code to get Profile Pic URL

  // let imageRef = storage().ref('rajeshbethu.jpg');
  // imageRef.getDownloadURL().then(url => {
  //   console.log('MYURL');
  //   console.log(url);
  //   setUri(url);
  // });

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
        setUri(image.path);
        setImgUploaded(true);
        props.onChange?.(image.path);
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
        setUri(image.path);
        setImgUploaded(true);
        props.onChange?.(image.path);
      })
      .catch(e => {})
      .finally(close);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          style={styles.avatar}
          {...props}
          source={uri ? {uri} : props.source}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 45,
            width: 45,
            backgroundColor: Colors.primary,
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Icon name="camera" size={25} color={Colors.white} />
        </View>
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
});
