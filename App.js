import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <CategoriesScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14213e',
  },
});
