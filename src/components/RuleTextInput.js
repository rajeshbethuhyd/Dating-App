import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function RuleTextInput({label, onChangeText, rule}) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder="Type something"
      onChangeText={text => {
        onChangeText(text, rule);
      }}
      right={<TextInput.Affix text="/100" />}
    />
  );
}
