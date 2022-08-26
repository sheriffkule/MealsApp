import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route}) {
  const catId = route.params.categoryId;

  const dispayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dispayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
