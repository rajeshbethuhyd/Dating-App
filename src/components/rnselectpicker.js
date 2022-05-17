import RNPickerSelect from 'react-native-picker-select';
<RNPickerSelect
  placeholder={{label: 'Choose Your Sexuality'}}
  onValueChange={value => console.log(value)}
  items={[
    {key: '1', label: 'Staright', value: 'Staright'},
    {key: '2', label: 'Lesbian', value: 'Lesbian'},
  ]}
/>;
