import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import navigationStrings from '../constants/navigationStrings'
import { Cart, Home } from '../Screens'


const Tab=createBottomTabNavigator()

export default function BottomTabNavigator() {
    return(
        <Tab.Navigator  
        initialRouteName={navigationStrings.HOME}
        activeColor='#ff3f6c'
      barStyle={{
          backgroundColor:'white'
      }}>
          <Tab.Screen
              name={navigationStrings.HOME}
              component={Home}
              options={{
          tabBarLabel: 'Homepage'
        }}
          />
              <Tab.Screen
              name={navigationStrings.CART}
              component={Cart}
              options={{
          tabBarLabel: 'Cart'
        }}
              />

        </Tab.Navigator>
    )

    
}