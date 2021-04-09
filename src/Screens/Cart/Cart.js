import React, { Component } from "react";
import { Text, View ,FlatList}from "react-native";
import Cart2 from "../../Components/Cart2";
import { scrollAPI } from "../../redux/actions/action";
 export default class Cart extends Component {
     state={
        data:[],
         limit:10,
         skip:0,
     }
     infiniteAPI=()=>{
        const{limit,skip}=this.state
        scrollAPI({
            "searchType":"LEADERBOARD", "limit":`${limit}`, "skip":`${skip}`
        }).then((res)=>{
            this.setState({data:res.data})
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount=()=>{
        this.infiniteAPI();
    }

     render(){
         let {data} = this.state
     return(
         <View>
            <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={({item})=>item.id}
            ItemSeparatorComponent={()=>(
                <View style={{marginBottom:10}}></View>)}
                renderItem={({item})=><Cart2 data={item}/>}
                />
         </View> 
     )
     
 }}