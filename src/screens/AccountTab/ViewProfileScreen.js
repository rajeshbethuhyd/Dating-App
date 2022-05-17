import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Title, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FornAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyDivider from '../../components/MyDivider';

export default function ViewProfileScreen() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.profilePicView}>
        <Image
          style={styles.imageStyles}
          source={require('../../media/login.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={[styles.rows, styles.firstRow]}>
          <View style={{flex: 4}}>
            <Title>Full Name Full Name</Title>
            <Text>Hyderabad</Text>
          </View>
          <View style={{flex: 1}}>
            <Title>30, F</Title>
            <Text>Single</Text>
          </View>
        </View>
        <View style={[styles.secondRow, styles.rows]}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            This is my Bio in just 100 characters
          </Text>
        </View>
        <MyDivider />
        <View style={[styles.friendship, styles.rows]}>
          <Icon name="account-search" size={22} />
          <Text style={styles.textStyles}>Friendship</Text>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows]}>
          <Icon name="human-male-height" size={22} />
          <Text style={styles.textStyles}>6' 1"</Text>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows, {marginVertical: 15}]}>
          <FornAwesomeIcon
            name="graduation-cap"
            size={19}
            style={{width: 22, paddingTop: 3}}
          />
          <View>
            <Text style={styles.textStyles}>B.Tech Computer Science</Text>
            <Text style={styles.textStyles}>at CMR Engg. College</Text>
          </View>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows, {marginVertical: 15}]}>
          <Icon name="briefcase" size={22} />
          <View>
            <Text style={styles.textStyles}>this is my Job</Text>
            <Text style={styles.textStyles}>This is my Company</Text>
          </View>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows]}>
          <Icon name="rice" size={22} />
          <Text style={styles.textStyles}>Vegetarian</Text>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows]}>
          <Icon name="smoking" size={22} />
          <Text style={styles.textStyles}>No Smoking</Text>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows]}>
          <Icon name="glass-wine" size={22} />
          <Text style={styles.textStyles}>Drinking</Text>
        </View>
        <MyDivider />
        <View style={[styles.thirdRow, styles.rows]}>
          <MaterialIcons name="fitness-center" size={22} />
          <Text style={styles.textStyles}>Exercise</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  profilePicView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyles: {
    height: 400,
    width: '100%',
  },
  detailsContainer: {
    paddingHorizontal: 15,
  },
  rows: {
    marginVertical: 10,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  secondRow: {},
  textStyles: {
    fontSize: 17,
    marginLeft: 10,
  },
});
