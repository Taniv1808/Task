import React, { Component } from "react";
import { View, Text, Image,StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity ,FlatList} from "react-native-gesture-handler";
import AddCart from "../../Components/AddCart";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../Navigation/navigationStrings";
import Homepage from "../Homepage/Homepage";

export default class Cart extends Component {
    render() {
      var amount=0
      var amountdiscounted=0
      var totalamount=0
      let item = this.props.route.params.taniv;
      for(let i=0; i<item.length; i++){
        amount=item[i].price+amount
        amountdiscounted=item[i].price*30/100+amountdiscounted
        totalamount=amount-amountdiscounted
      }
    //   console.warn(item)
      const { navigation } = this.props;
      return (
        <View style={styles.cart}>
          <View style={styles.cart1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={imagePath.remove}
              style={styles.cartremove}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={imagePath.wishlist}
              style={styles.cartWishlist}
            />
          </TouchableOpacity>
          </View>
          <View>
            <ScrollView>
                <Image source={{uri:'https://assets.ajio.com/medias/sys_master/images/images/h4c/h3c/30906889895966/cart-page-banner-mobile2.jpg'}} style={{width:360,height:50,marginTop:10}}/>
        <FlatList
            data={item}
            showsVerticalScrollIndicator={false}
            keyExtractor={(key) => key.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={({ item }) => <AddCart data={item}/>}
          />
          <Text style={{marginLeft:18,marginTop:20,color:'grey'}}>Assured quality | 100% Handpicked | Easy Exchange </Text>
          <View style={{marginTop:20,backgroundColor:'white',padding:6,flexDirection:'row'}}>
          <Text style={{fontSize:20,marginLeft:10}}>Apply Coupon</Text>
          <Text style={{marginLeft:150,marginTop:4,color:'blue'}}>SELECT</Text>
          </View>
          <View style={{backgroundColor:'white',marginTop:20,marginBottom:20}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:20}}>Order Details</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:15}}>Bag Total</Text>
          <Text style={{marginLeft:220,marginTop:7}}>Rs.{amount}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:15}}>Bag Savings</Text>
          <Text style={{marginLeft:200,marginTop:7}}>Rs.{amountdiscounted}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:15}}>Coupon Applied</Text>
          <TouchableOpacity>
          <Text style={{marginLeft:143,marginTop:7,color:'blue'}}>Apply Coupon</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:15}}>Delivery</Text>
          <Text style={{marginLeft:230,marginTop:7,color:"blue"}}>FREE</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:10,marginLeft:15,fontSize:20}}>Total Amount</Text>
          <Text style={{marginLeft:160,marginTop:20}}>Rs.{totalamount}</Text>
          </View>
          </View>
            </ScrollView>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:10,marginLeft:10,fontSize:20}}>Rs.{totalamount}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width:180,
                marginVertical: 7,
                height: 50,
                borderRadius: 10,
                marginLeft:80
              }} 
              onPress={()=>navigation.navigate(navigationStrings.CHECKOUT)}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: 16,
                  fontSize: 15,
                }}
              >
                Confirm Order
              </Text>
            </TouchableOpacity>
            </View>
            <Text style={{marginTop:-10,marginLeft:10,color:'blue'}}>View Details</Text>
          </View>

      )
    }
}

// cart stylesheet
const styles=StyleSheet.create({
  cart:{
     flex: 1,
     marginTop:10,
     paddingBottom: 170
  },
  cart1:{
    marginBottom:8,
    flexDirection:'row'
  },
  cartremove:{
    width: 30,
    height: 30,
    marginTop: 50,
    marginLeft: 30 
  },
  cartWishlist:{ 
    width: 30, 
    height: 30, 
    marginTop: 50, 
    marginLeft: 240 
  }

})