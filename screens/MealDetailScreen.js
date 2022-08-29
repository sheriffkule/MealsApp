import React, {useLayoutEffect} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButon from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/redux/favourites';
//import {FavouritesContext} from '../store/context/favourites-context';

function MealDetailScreen({route, navigation}) {
  //const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMalsIds = useSelector(state => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavourite = favouriteMalsIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      //favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({id: mealId}));
    } else {
      //favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({id: mealId}));
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
