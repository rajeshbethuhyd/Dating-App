import {
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../Colors';
import {Subheading} from 'react-native-paper';

export default function UserCardComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <ImageBackground
          source={require('../assets/img/rajesh.jpg')}
          resizeMode="cover"
          style={styles.userCardImg}>
          <View style={styles.userCardInfo}>
            <Subheading style={styles.userCardName}>{props.name}</Subheading>
            <Subheading style={[styles.userCardName, styles.userCardAgeGen]}>
              {/* M, 25 */}
            </Subheading>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    padding: 15,
  },
  TopSection: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: '15%',
    elevation: 6,
    shadowColor: '#52006A',
  },
  userCardImg: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  userCardInfo: {
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userCardName: {
    fontSize: 25,
    fontWeight: '600',
    // backgroundColor: 'yellow',
  },
  userCardAgeGen: {
    // backgroundColor: 'green',
  },
});
