import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function List({data}) {
  return data.map(dataPoint => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: '#48d1cc',
  },
  itemText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
});
