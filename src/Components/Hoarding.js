import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default function Carousel(props) {
  const {} = props;
  return (
    <ScrollView
      horizontal={true}
      style={styles.mainCarousel}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
         
          padding: 8, 
          marginRight:-10,
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://image.shutterstock.com/image-photo/female-running-athlete-woman-trail-260nw-144741580.jpg",
          }}
        ></Image>
      </View>
      <View
        style={{
          padding: 10,
          
          marginLeft: 10,
         
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjyzjUtwUflcuTj5YiGUdPKMouVvbIvk1SQ&usqp=CAU",
          }}
        ></Image>
        
      </View>
      <View
        style={{
          
          padding: 10,
          marginRight: 0,
        
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://medias.fashionnetwork.com/image/upload/v1/medias/04dff0ebb39053afe2d6edf112abb9223107793.jpg",
          }}
        ></Image>
      </View>
      <View
        style={{
         
          padding: 10,
         
          marginRight: 0,
       
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
            "https://image.shutterstock.com/image-photo/female-running-athlete-woman-trail-260nw-144741580.jpg",
          }}
        ></Image>
      </View>
      <View
        style={{
         
          padding: 10,
        
          marginRight: 0,
          
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://image.shutterstock.com/image-photo/female-running-athlete-woman-trail-260nw-144741580.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>WOMEN</Text>
      </View>
      <View
        style={{
         
          padding: 10,
    
          marginRight: 0,
         
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjyzjUtwUflcuTj5YiGUdPKMouVvbIvk1SQ&usqp=CAU",
          }}
        ></Image>
        <Text style={styles.carouselText}>KIDS</Text>
      </View>
    </ScrollView>
  );
}

// Carousel Stylesheet
const styles=StyleSheet.create({
      mainCarousel:{ 
        flexDirection: "row", 
        marginTop:-10,
      },
      carouselImages:{ 
        height: 170, 
        width: 300 ,
        marginRight:-6
      },
      carouselText:{ 
        color: "white", 
        textAlign: "center" 
      },
})