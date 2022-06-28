import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

import onDisplayNotification from '../HelperFunctions/DisplayNotification';
import {Modal} from 'react-native-paper';

export default function TestScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const containerStyle = {
    backgroundColor: 'green',
    padding: 20,
    height: '80%',
    zIndex: 2000,
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>Example Modal.</Text>
      </Modal>
      <View>
        <Button title="Display Notification" onPress={showModal} />
      </View>
    </>
  );
}
