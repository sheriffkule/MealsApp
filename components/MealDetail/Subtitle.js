import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#66cdaa',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 4,
    borderBottomColor: '#48d1cc',
    borderBottomWidth: 1.5,
  },
});
