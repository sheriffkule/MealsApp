import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerStyle}>Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerStyle: {
    color: 'black',
  },
});
