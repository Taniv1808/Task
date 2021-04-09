import React,{Component} from 'react'
import {View,Text,Image, TextInput, ScrollView, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import {useNavigation} from '@react-navigation/native'

export default function  Cart(props) {
  const navigation=useNavigation()
  const{data,onAdd}=props
  return(
    <ScrollView style={{paddingBottom:180}}>
<TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.DETAIL,{array:data})}>
    <Image source={{uri:data.img1}} style={{width:140,height:240,marginLeft:20}}/>
    </TouchableOpacity>
    <Text style={{marginLeft:45,fontSize:20}}>Rs.{data.price}</Text>
    <Text style={{marginLeft:50,fontSize:18}}>{data.name}</Text>
    <TouchableOpacity onPress={()=>{onAdd(data)}}>
      <Text style={{marginLeft:45,borderWidth:0.4,padding:5,textAlign:'center',width:60,backgroundColor:'#dcdcdc',marginTop:4}}>
      Add
      </Text>
    </TouchableOpacity>
    </ScrollView>
  )
}
