import React, {useContext, useLayoutEffect} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButon from '../components/IconButton';
import {FavouritesContext} from '../store/context/favourites-context';

function MealDetailScreen({route, navigation}) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButon
            icon={mealIsFavourite ? 'md-star' : 'md-star-outline'}
            color="#ebd3ad"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
    [navigation, changeFavouriteStatusHandler];
  });

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={selectedMeal.detailedText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 42,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: '500',
    fontSize: 28,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#05688f',
    marginHorizontal: 30,
    textAlign: 'center',
    color: '#87cefa',
  },
  detailedText: {
    color: '#87cefa',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});
