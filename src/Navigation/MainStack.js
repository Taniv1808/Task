import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home, Detail} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.DETAIL}
        component={Detail}
        options={{headerShown: false}}
      />
  

    </>
  );
}