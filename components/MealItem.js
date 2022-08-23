import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MealItem({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{title}</Text>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    color: 'black',
  },
});
