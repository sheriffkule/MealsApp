import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return <CategoriesScreen style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
