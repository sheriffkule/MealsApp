import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
// import FavouritesContextProvider from './store/context/favourites-context';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#05688f'},
        headerTintColor: '#ebd3ad',
        headerBlurEffect: 'systemThinMaterialDark', //IOS only
        headerTitleStyle: {fontSize: 20, fontWeight: '600'},
        sceneContainerStyle: {backgroundColor: '#274754'},
        animation: 'flip',
        statusBarAnimation: 'slide',
        headerTitleAlign: 'center',
        drawerActiveBackgroundColor: '#1d3658',
        drawerContentStyle: {backgroundColor: '#011628'},
        drawerActiveTintColor: '#0eaf69',
        drawerInactiveTintColor: '#0a834d',
        drawerType: 'slide',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="md-star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#05688f'},
              headerTintColor: '#ebd3ad',
              headerTransparent: true,
              headerBlurEffect: 'systemThinMaterialDark',
              headerTitleStyle: {fontSize: 20, fontWeight: '600'},
              contentStyle: {backgroundColor: '#274754'},
              animation: 'fade',
              statusBarAnimation: 'slide',
              headerTitleAlign: 'center',
              animationTypeForReplace: 'push',
              //navigationBarColor: 'black',
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
