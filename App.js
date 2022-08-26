import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          navigationOptions
          screenOptions={{
            headerStyle: {backgroundColor: '#05688f'},
            headerTintColor: '#ebd3ad',
            headerBlurEffect: 'systemThinMaterialDark',
            contentStyle: {backgroundColor: '#274754'},
            animation: 'flip',
            statusBarAnimation: 'slide',
            headerTitleAlign: 'center',
            //navigationBarColor: 'black',
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: 'Meal Overview',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
