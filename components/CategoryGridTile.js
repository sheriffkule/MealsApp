import React from 'react';
import {Pressable, View, Text, StyleSheet, Platform} from 'react-native';

function CategoryGridTile({title, color}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#00ffff'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff6669',
    elevation: 4,
    backgroundColor: 'black',
    shadowColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 7,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.4,
  },
  innerContainer: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'underline',
  },
});
