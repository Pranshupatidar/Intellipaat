import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import MyCourses from './src/MyCourses';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Courses') {
              iconName = focused ? 'school' : 'school-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgb(100,89,178)',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: 'rgb(100,89,178)',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Ionicons
              name={'notifications-outline'}
              size={25}
              color={'#fff'}
              style={{marginRight: 10}}
            />
          ),
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Courses" component={MyCourses} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
