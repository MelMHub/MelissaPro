//NOTE - Importing libraries from react and react-native
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// NOTE - MAIN body component for HomeScreen
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {user: 'Guest'})}
      />
    </View>
  );
}

//NOTE - MAIN Stylesheet for HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
});


