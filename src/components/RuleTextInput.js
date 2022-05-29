import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function RuleTextInput({label, onChangeText, rule, val}) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      onChangeText={text => {
        onChangeText(text, rule);
      }}
      right={<TextInput.Affix text="/100" />}
      value={val}
    />
  );
}
