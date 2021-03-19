import React, { Component } from "react";
import { View, Text, Image ,StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
navigationStrings

export default class Detail extends Component {
  render() {
    let item = this.props.route.params.array;
    // console.warn(item)
    const { navigation } = this.props;
    return (
      <View style={styles.main}>
        <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={imagePath.arrow}
            style={styles.arrow1}
          />
        </TouchableOpacity>
        </View>
        <ScrollView>
          <Image 
            style={styles.detailImage}
            source={{ uri: item.img }}
          />
          <Text
            style={styles.name1}
          >
            {item.name}
          </Text>
          <View style={styles.priceView}>
          <Text style={{marginTop:-80,fontSize:25,marginLeft:30}}>Rs.{item.price}</Text>
          <Text style={styles.priceView2}>30% OFF</Text>
          </View>
          <Text style={styles.tax}>Price inclusive of all taxes.</Text>
          <View style={styles.discount}>
          <Text style={styles.discount1}
          >
            Extra Upto 25% off on 1500 and Above.
          </Text>
          <View style={styles.coupon}>
          <Text style={styles.coupon1}>Use Coupon Code</Text>
            </View>
          </View>
          <Text 
          style={styles.offer}
          >+8 more Offers
          </Text>
          <View style={styles.blank}>

        </View>
          <View style={{flexDirection:'row'}}>
          <Text 
          style={styles.colors}
          >Color

          </Text>
          <Image source={imagePath.color} style={styles.colorImage}/>
          </View>
          <View style={styles.coloRow}>
            <Image source={imagePath.navy} style={styles.navy1}/>
          <Text style={styles.navy2}>Navy Blue</Text>
          <Image source={imagePath.green} style={styles.green1}/>
          <Text style={styles.green2}>Green</Text>
          <Image source={imagePath.grey} style={styles.grey1}/>
          <Text style={styles.grey2}>Grey</Text>
          </View>
          <View style={styles.blank1}>

          </View>
          <View style={styles.size}>
          <Text style={styles.size1}>Select Size</Text>
          <Text style={styles.chart}>Size Chart</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity>
            <Text style={styles.sizes}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.sizes}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.sizes}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.sizes}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.sizes}>XXL</Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>

        <View style={styles.bottom1}>
          <TouchableOpacity
            style={styles.detailBack}
            onPress={()=>{navigation.navigate(navigationStrings.HOME,{screen: navigationStrings.HOME,params:{product:item},
            })}}>
            <Text
              style={styles.detailCart}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


// detail stylesheet
const styles=StyleSheet.create({
    main:{
       flex: 1
      },
    back:{
      marginBottom:8
    },
    arrow1:{ 
      width: 30, 
      height: 30, 
      marginTop: 10, 
      marginLeft: 30
     },
    search1:{ 
      width: 30, 
      height: 30, 
      marginLeft: 220, 
      marginTop: -30 
    },
    wishlist1:{
       width: 35, 
       height: 35, 
       marginLeft: 270, 
       marginTop: -33
       },
    bag1:{ 
      width: 26,
      height: 26, 
      marginLeft: 320, 
      marginTop: -33 
    },
    detailImage:{
       height: 450, 
       width:'100%',
       marginTop:-40,
       resizeMode:'contain'
       },
    name1:{
      fontSize: 20,
      marginTop: 20,
      marginLeft: 50,
      color: "grey",
    },
    priceView:{
      flexDirection:'row'
    },  
    priceView1:{ 
      fontSize: 20,
       marginTop: 6, 
       marginLeft: 50 
      },
    priceView2:{
      color:'red',
      marginLeft:30,
      marginTop:-70,
      fontSize:20
    },
    tax:{
       marginLeft: 50,
       marginTop:-30
       },
    discount:{
      borderWidth:0.2,
      width:260,
      marginLeft:45,
      marginTop:10,
      height:70
    },
    discount1:{
      fontSize:14,
      marginLeft:10
    },
    coupon:{
      marginLeft:50,
      marginTop:10,
      backgroundColor:'#dcdcdc',
      width:150,
      height:30,
      padding:5
    },
    coupon1:{
      fontSize:15,
      marginLeft:7
    },
    offer:{
      color:'blue',
     marginLeft:210,
     marginTop:6,
    marginBottom:6
  },
  blank:{
    backgroundColor:'#dcdcdc',
    height:10,
    width:'100%'
  },
  colors:{       
    marginLeft:50,
    marginTop:6,
    marginBottom:6,
    fontSize:20
  },
  colorImage:{
    width:20,
    height:20,
    marginTop:10,
    marginLeft:7
  },
  coloRow:{
    flexDirection:'row'
  },
  navy1:{
    width:20,
    height:20,
    marginLeft:50
  },
  navy2:{
    marginLeft:6,
    marginBottom:9
  },
  green1:{
    width:20,
    height:20,
    marginLeft:30
  },
  green2:{
    marginLeft:6,
    marginBottom:9
  },
  grey1:{
    width:20,
    height:20,
    marginLeft:30
  },
  grey2:{
    marginLeft:6,
    marginBottom:9
  },
  blank1:{
    backgroundColor:'#dcdcdc',
    height:10,
    width:'100%'
  },
  size:{
    flexDirection:'row'
  },
  size1:{
    marginLeft:50
  },
  chart:{
    color:'blue',
    marginLeft:120
  },
  bottom:{
    flexDirection:'row',
    marginLeft:50,
    marginTop:10
  },
  sizes:{
    marginRight:5,
    borderWidth:1,
    borderRadius:20,
    fontSize:15,
    width:30,
    padding:6,
    height:30,
    marginBottom:20,
    textAlign:'center'
  },
  bottom1:{ 
    flexDirection: "row"
   },
   whatsapp1:{
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 30,
    marginBottom: 10,
    marginTop:4
   
  },
  wishlist2:{
    width: 35,
    height: 35,
    marginLeft: 40,
    resizeMode: "contain",
    marginBottom: 13,
    
  },
  detailBack:{ 
    marginLeft: 90, 
    borderWidth: 1, 
    padding: 5 
  },
  detailCart:{
    fontSize: 15,
    fontWeight: "bold",
    marginRight: -3,
    padding: 1,
  }

})