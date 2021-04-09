import React from 'react';
import {View, Text, StyleSheet,FlatList, Image} from 'react-native';

export default function Cart2(props) {
    let {data}=props;
        
    return(    
        <View style={{marginTop:10}}>
            <Text style={{textAlign:'center',fontSize:20}}>DEALS OF THE DAY</Text>
            <View style={{marginTop:20}}>
        <Image source={{uri:data}} style={{width:140,height:120,marginLeft:40}}/>
        <View style={{flexDirection:'row',marginLeft:80}}>
        <Text>Price: </Text>
        <Text>4500</Text>
        </View>
        </View>
        </View>
        )
}
