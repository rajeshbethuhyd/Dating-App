import {View, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import BottomButton from '../../components/BottomButton';
import {Subheading, TextInput, Title} from 'react-native-paper';
import RuleTextInput from '../../components/RuleTextInput';

export default function ZeroTolerance({navigation}) {
  const [rule1, setRule1] = React.useState('');
  const [rule2, setRule2] = React.useState('');
  const [rule3, setRule3] = React.useState('');
  const [rule4, setRule4] = React.useState('');
  const [rule5, setRule5] = React.useState('');
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
      <ScrollView style={styles.container}>
        <Subheading style={{marginBottom: 15}}>
          Avoid wrong persons by mentioning whatever you will never tolerate in
          your partner or in general.
        </Subheading>
        <View style={styles.inputStyles}>
          <RuleTextInput label="Rule 1" onChangeText={onchangetext} rule={1} />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput label="Rule 2" onChangeText={onchangetext} rule={2} />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput label="Rule 3" onChangeText={onchangetext} rule={3} />
        </View>
        <View style={styles.inputStyles}>
          <RuleTextInput label="Rule 4" onChangeText={onchangetext} rule={4} />
        </View>
        <View style={[styles.inputStyles, {marginBottom: 35}]}>
          <RuleTextInput label="Rule 5" onChangeText={onchangetext} rule={5} />
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
  },
  inputStyles: {
    marginVertical: 5,
  },
});
