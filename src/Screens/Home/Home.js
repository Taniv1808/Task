import React,{Component} from 'react'
import {View,Text,Image, TextInput, ScrollView} from 'react-native'
import Carousel from '../../Components/Carousel'
import Decathlon from '../../Components/Decathlon'
import Hoarding from '../../Components/Hoarding'
import Terms from '../../Components/Terms'


export default class Home extends Component{
    render(){
        return(
            <View>
            <Decathlon/>
            <ScrollView>
                <Carousel/>
                <Hoarding/>
                <Terms/>
            </ScrollView>
            </View>
            
        )
    }
}