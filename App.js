import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#05688f'},
        headerTintColor: '#ebd3ad',
        headerBlurEffect: 'systemThinMaterialDark',
        headerTitleStyle: {fontSize: 20, fontWeight: '600'},
        sceneContainerStyle: {backgroundColor: '#274754'},
        animation: 'flip',
        statusBarAnimation: 'slide',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#05688f'},
            headerTintColor: '#ebd3ad',
            headerBlurEffect: 'systemThinMaterialDark',
            headerTitleStyle: {fontSize: 20, fontWeight: '600'},
            contentStyle: {backgroundColor: '#274754'},
            animation: 'flip',
            statusBarAnimation: 'slide',
            headerTitleAlign: 'center',
            //navigationBarColor: 'black',
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
// });
