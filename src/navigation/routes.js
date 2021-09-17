import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import AuthStack from './AuthStack';
import CourseDetailStack from './CourseDetailsStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.WELCOME}
        screenOptions={{headerShown: false}}>
        {AuthStack(Stack)}
        {CourseDetailStack(Stack)}
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
