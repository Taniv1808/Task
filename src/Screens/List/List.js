import React,{Component} from 'react'
import {View,Text, FlatList,ScrollView} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import ListArray from '../../Components/ListArray'
import { decrease, deleteItem, editItem, increase, total } from '../../redux/actions/action'

class List extends Component{
     
    render(){
        let {list}=this.props
        var amount=0
        var amountdiscounted=0
        var totalamount=0
        for(let i=0; i<list.length; i++){
            amount=list[i].price+amount
            amountdiscounted=list[i].price*30/100+amountdiscounted
            totalamount=amount-amountdiscounted
             }
        console.log(this.props.list)
        return(
            <View style={{flex:1}}>
                <Text style={{textAlign:'center',fontSize:30}}>My Cart</Text>
    <ScrollView>
          <FlatList
           data={this.props.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={()=>(
              <View style={{marginBottom:10}}></View>)}
              renderItem={({item})=>(<ListArray data={item} onDelete={this.props.deleteItem}
              onEdit={this.props.editItem}/>)}/>
              <View style={{marginTop:10,marginLeft:30}}>
                  <Text style={{textAlign:'center',fontSize:20}}>Your Billing Amount</Text>
                  <View style={{marginTop:20}}>
              <Text style={{fontSize:20}}>Amount: Rs.{amount}</Text>
              <Text style={{fontSize:20}}>Amount Discounted: Rs.{amountdiscounted}</Text>
              <Text style={{fontSize:20}}>Total Amount: Rs.{totalamount}</Text>
              </View>
              </View>
              </ScrollView>
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return{
        list:state.reducer.list
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        deleteItem:index=>dispatch(deleteItem(index)),
        editItem:index=>dispatch(editItem(index)),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)