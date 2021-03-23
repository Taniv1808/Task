import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'

export default function ListArray(props) {
    const{data,onDelete,onEdit}=props
    return(
        <View style={{marginTop:40,marginBottom:80}}>
            <View style={{flexDirection:'row'}}>
            <Image source={{uri:data.img1}} style={{width:90,height:160,marginLeft:40}}/>
            <View style={{flexDirection:'column',marginLeft:30}}>
            <Text style={{fontSize:18}}>{data.name}</Text>
            <Text style={{marginTop:15,fontSize:18}}>Rs.{data.price}</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity onPress={()=>{onEdit(data.id)}}>
                <Text style={{fontSize:20}}>+</Text>
            </TouchableOpacity>
            <Text style={{marginTop:4,marginLeft:2}}>QTY:1</Text>
            <TouchableOpacity onPress={()=>{onEdit(data.id)}}>
                <Text style={{fontSize:20,marginLeft:2}}>-</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>

            <TouchableOpacity onPress={()=>{onDelete(data.id)}}>
                <Text style={{marginLeft:250,color:'blue'}}>DELETE</Text>
            </TouchableOpacity>

        </View>
    )
    
}
