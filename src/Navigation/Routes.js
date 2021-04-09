import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { getItem } from '../utils/utils';

const Stack = createStackNavigator();

function Routes(props) {
  const{userData}=props
  console.log(userData,"routes");
  getItem('userData').then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData && AuthStack(Stack)}
        {MainStack(Stack)}  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps=state=>{
  return{
    userData:state.auth.userData
  }
}

export default connect(mapStateToProps)(Routes)
