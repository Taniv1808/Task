import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function Routes(props) {
  const{isLogged}=props
  console.log(isLogged,"routes")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogged && AuthStack(Stack)}
        {MainStack(Stack)}  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
