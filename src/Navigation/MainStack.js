// import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Detail, Cart, Home, List} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import BottomTabNavigator from './TabRoutes';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.DETAIL}
        component={Detail}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name={navigationStrings.LIST}
      component={List}
      options={{headerShown:false}}>
        
      </Stack.Screen>
  

    </>
  );
}