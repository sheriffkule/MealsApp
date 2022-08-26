import React from 'react';
import {View, Text, StyleSheet, ImageBackgroundComponent} from 'react-native';

function MealDetails({duration, complexity, affordability}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity}</Text>
      <Text style={styles.detailItem}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
    color: '#00ffff',
  },
});
