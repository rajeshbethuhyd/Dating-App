import {View, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useEffect, useContext} from 'react';
import BottomButton from '../../components/BottomButton';
import {Colors, Subheading, TextInput, Title} from 'react-native-paper';
import RuleTextInput from '../../components/RuleTextInput';
import ProgressStepBar from '../../components/ProgressStepBar';
import {UserInfoContext} from '../../navigation/MainApp';

export default function ZeroTolerance({navigation}) {
  const {
    rule1,
    setRule1,
    rule2,
    setRule2,
    rule3,
    setRule3,
    rule4,
    setRule4,
    rule5,
    setRule5,
  } = useContext(UserInfoContext);
  const onchangetext = (text, rule) => {
    if (text.length >= 100) {
      alert('max length 100 reached');
      return;
    } else {
      if (rule === 1) {
        setRule1(text);
      } else if (rule === 2) {
        setRule2(text);
      } else if (rule === 3) {
        setRule3(text);
      } else if (rule === 4) {
        setRule4(text);
      } else if (rule === 5) {
        setRule5(text);
      }
    }
  };

  return (
    <>
      <ProgressStepBar current={4} total={5} />
      <ScrollView style={styles.container}>
        <Subheading style={{marginBottom: 15}}>
          Avoid wrong persons by mentioning whatever you will never tolerate in
          your partner or in general.
        </Subheading>
        <View style={styles.inputStyles}>
          <RuleTextInput
            label="Rule 1"
            onChangeText={onchangetext}
            rule={1}
            val={rule1}
          />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput
            label="Rule 2"
            onChangeText={onchangetext}
            rule={2}
            val={rule2}
          />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput
            label="Rule 3"
            onChangeText={onchangetext}
            rule={3}
            val={rule3}
          />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput
            label="Rule 4"
            onChangeText={onchangetext}
            rule={4}
            val={rule4}
          />
        </View>
        <View style={[styles.inputStyles, {marginBottom: 35}]}>
          <RuleTextInput
            label="Rule 5"
            onChangeText={onchangetext}
            rule={5}
            val={rule5}
          />
        </View>
      </ScrollView>
      <BottomButton
        label="CONTINUE"
        onPress={() => {
          navigation.navigate('ProfilePicScreen');
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
  },
  inputStyles: {
    marginVertical: 5,
  },
});
