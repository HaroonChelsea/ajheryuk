//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {CourseDetail, Home, Messages, Profile} from '../screens';
import {theme} from '../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textColorGray,
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Icon
                  name="th-large"
                  size={20}
                  color={
                    focused ? theme.colors.primary : theme.colors.textColorGray
                  }
                />
                {focused ? (
                  <View style={styles.horizontalLine} />
                ) : (
                  <View style={styles.horizontalLineTrans} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.COURSEDETAIL}
        component={CourseDetail}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Icon
                  name="compass"
                  size={20}
                  color={
                    focused ? theme.colors.primary : theme.colors.textColorGray
                  }
                />
                {focused ? (
                  <View style={styles.horizontalLine} />
                ) : (
                  <View style={styles.horizontalLineTrans} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.MESSAGES}
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Icon
                  name="envelope"
                  size={20}
                  color={
                    focused ? theme.colors.primary : theme.colors.textColorGray
                  }
                />
                {focused ? (
                  <View style={styles.horizontalLine} />
                ) : (
                  <View style={styles.horizontalLineTrans} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <Icon
                  name="user"
                  size={20}
                  color={
                    focused ? theme.colors.primary : theme.colors.textColorGray
                  }
                />
                {focused ? (
                  <View style={styles.horizontalLine} />
                ) : (
                  <View style={styles.horizontalLineTrans} />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    width: 15,
    borderRadius: 5,
    height: 3,
    marginTop: 5,
    backgroundColor: theme.colors.primary,
  },
  horizontalLineTrans: {
    width: 15,
    borderRadius: 5,
    height: 3,
    marginTop: 5,
    backgroundColor: 'transparent',
  },
});

export default TabRoutes;
