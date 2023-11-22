import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Subscription } from '../pages/subscription';
import { Home } from '../pages/home';
import { bottomToTopTransition, rightToLeftTransition } from './transitions';
import { SubscriptionPlan } from '../pages/subscription/plan';
import { New } from '../pages/home/tabs/showdown/new';
import { Trending } from '../pages/home/tabs/showdown/trending';
import { ContestDetails } from '../pages/home/tabs/contests/contestDetails';
import { JoinContest } from '../pages/home/tabs/contests/joinContest';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="new" component={New} options={{ headerShown: false }} />
        <Stack.Screen name="trending" component={Trending} options={{ headerShown: false }} />
        <Stack.Screen name="subscription" component={Subscription} options={{ headerShown: false, cardStyleInterpolator: bottomToTopTransition }} />
        <Stack.Screen name="subscription_plan" component={SubscriptionPlan} options={{ headerShown: false, cardStyleInterpolator: rightToLeftTransition }} />
        <Stack.Screen name="contest_details" component={ContestDetails} options={{ headerShown: false}} initialParams={{ id: null, title: null }} />
        <Stack.Screen name="join_contest" component={JoinContest} options={{ headerShown: false, cardStyleInterpolator: rightToLeftTransition }} initialParams={{ id: null, title: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};