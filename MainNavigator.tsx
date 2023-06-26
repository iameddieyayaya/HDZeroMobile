import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screens/Home';
import {Player} from './src/screens/Player';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: true}}>
    <Screen name="Home" component={Home} />
    <Screen name="Player" component={Player} />
  </Navigator>
);

const MainNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default MainNavigator;
