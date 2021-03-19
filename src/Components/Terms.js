import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default function Carousel(props) {
  const {} = props;
  return (
      <View style={{backgroundColor:'white',marginTop:-20,flexDirection:'row'}}>
    <ScrollView
      horizontal={true}
      style={styles.mainCarousel}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:100,
          height:110,
          marginBottom:8
         
        }}
      >
        <Text style={styles.carouselText}>  Our</Text>
        <Text style={styles.carouselText}>  Promise</Text>
      </View>
      <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:130,
          height:110,
          marginBottom:8
         
        }}
      >
        <Text style={styles.carouselText}>Minimun 2 years</Text>
        <Text style={styles.carouselText}>Warranty*</Text>
      </View>
      <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:130,
          height:110,
          marginBottom:8
         
        }}
      >
        <Text style={styles.carouselText}>Drop through/Free</Text>
        <Text style={styles.carouselText}>Pickup in Stores</Text>
      </View>
      <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:130,
          height:110,
          marginBottom:8
         
        }}
      >
        <Text style={styles.carouselText}>Home Delivery at</Text>
        <Text style={styles.carouselText}>Your Doorstep</Text>
      </View>
      <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:150,
          height:110,
          marginBottom:8
         
        }}
      >
        <Text style={styles.carouselText}>Easy 90 Days Return</Text>
     </View>
     <View
        style={{
          backgroundColor:'#dcdcdc',
          padding: 10,
          margin: 10,
          marginRight: 0,
          width:80,
          height:110,
          marginBottom:8,
          marginRight:8
         
        }}
      >
        <Text style={styles.carouselText}>  Our</Text>
        <Text style={styles.carouselText}>  Promise</Text>
      </View>
    </ScrollView>
    </View>
  );
}

// Carousel Stylesheet
const styles=StyleSheet.create({
      mainCarousel:{ 
        flexDirection: "row", 
        marginTop:10
      },
      carouselImages:{ 
        height: 100, 
        width: 100 ,
      },
      carouselText:{ 
        color: "white", 
        width:200,
        marginTop:8,
        color:'black'
        
      },
})