import React from 'react';
import {View, Pressable, Text, Image, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MealDetails from './MealDetails';

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate('Meal Detail Screen', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: 'grey'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 12,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    margin: 6,
    color: 'black',
  },
});
