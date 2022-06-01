import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../Colors';
import {Switch, Subheading} from 'react-native-paper';

export default function SettingsScreen() {
  const [invisible, setInvisible] = React.useState(false);
  const [scheduleInvisible, setScheduleInvisible] = React.useState(false);

  const switchInvisible = () => setInvisible(!invisible);
  const switchScheduleInvisible = () =>
    setScheduleInvisible(!scheduleInvisible);

  return (
    <View style={styles.Container}>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Invisible Mode</Text>
        <Switch
          value={invisible}
          onValueChange={switchInvisible}
          color={Colors.primary}
        />
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Schedule Invisible Mode</Text>
        <Switch
          value={scheduleInvisible}
          onValueChange={switchScheduleInvisible}
          color={Colors.primary}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  settingsText: {
    fontSize: 17,
    color: Colors.black,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.ligthgrey,
  },
});
