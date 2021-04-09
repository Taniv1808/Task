import React,{Component} from 'react';
import {View,Text, Button} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import { clearUserData } from '../../utils/utils';

export default class Profile extends Component{
    render(){
        return(
            <View style={{marginTop:10}}>
                <Text style={{textAlign:'center'}}>Account</Text>
                <View style={{marginTop:10,width:80,marginLeft:140,alignItems:'center'}}>
                <Button onPress={()=>clearUserData().then((res)=>
                    this.props.navigation.navigate(navigationStrings.LOGIN)
                    ).catch((error)=>alert('Try Again'))} title='LOG OUT'/>
                    </View>
            </View>
        )
    }
}