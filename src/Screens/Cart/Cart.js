import React, { Component } from "react";
import { Text, View }
 from "react-native";
import { FlatList } from "react-native-gesture-handler";
 export default class Cart extends Component {
    //  constructor(props){
    //      super(props)
    //      this.state={
    //          data:[]
    //      }
    //  }
    //  componentDidMount(){
    //      this.apiCall()
    //  }
    //  async apiCall(){
    //      let resp = await fetch('https://api.talktier.com/user/v1/getUserSearch')
    //      let respJSON= await resp.json()
    //      console.warn(respJSON)
    //      this.setState({data:respJSON.age})
    //  }
     render(){
     return(
         <View>
             <Text>
                API CALL
             </Text>
             {/* <FlatList data={this.state.data}
             renderItem={({item})=>{item.age}}/> */}
         </View> 
     )
     
 }}