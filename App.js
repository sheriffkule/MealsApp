import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Meal App, Starting</Text>
      </View>
      <StatusBar barStyle="default" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
