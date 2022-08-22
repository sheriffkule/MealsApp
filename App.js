import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content">
        <CategoriesScreen style={styles.container} />
      </StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
