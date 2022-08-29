import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MealsList from '../components/MeaalsList/MealsList';
import {MEALS} from '../data/dummy-data';
//import {FavouritesContext} from '../store/context/favourites-context';

function FavouriteScreen() {
  //const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMalsIds = useSelector(state => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter(meal =>
    favouriteMalsIds.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
  },
});
