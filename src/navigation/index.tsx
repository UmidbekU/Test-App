import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { TNavigationParams } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator<TNavigationParams>();

const Navigator = () => {
  const navigationRef = useNavigationContainerRef<TNavigationParams>();
  // @ts-ignore
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <RootStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
