import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function MyTextInput({label, ...rest}) {
  return <TextInput label={label} {...rest} />;
}
