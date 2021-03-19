import React from 'react'
import {View,Text,Image,TextInput, TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'
imagePath

export default function Decathlon(props){
    return(
        <View style={{marginTop:20,marginBottom:10}}>
                <View style={{flexDirection:'row'}}></View>
                <Image source={imagePath.map} style={{width:40,height:50,marginLeft:10}}/>
                <Text style={{marginTop:-40,marginLeft:50}}>Delivering to 560001</Text>
                <Text style={{color:'blue',marginLeft:50}}>CHANGE</Text>
                <Image source={imagePath.logo} style={{width:120,height:40,marginLeft:230,marginTop:-40}}/>
            <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
            <TextInput placeholder='Search 70 Sports 500 Products' style={{marginTop:10,height:35,padding:8,width:240,backgroundColor:'#dcdcdc',marginLeft:20}}/>
            <TouchableOpacity>
            <Image source={imagePath.cart} style={{width:27,height:34,marginTop:10,borderWidth:0.3,marginLeft:30,backgroundColor:'#dcdcdc',width:40}}/> 
            </TouchableOpacity>
            </View>
            </View>
    )
}
