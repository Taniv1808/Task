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
          backgroundColor: `orange`,
          padding: 8,
          margin: 10,
          marginRight: 0,
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/reebok_enUS/Images/20SS_Float_running_IWallpaper-Tile3_DT_04082020_tcm274-481755.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `red`,
          padding: 10,
          margin: 10,
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
          backgroundColor: `blue`,
          padding: 10,
          margin: 10,
          marginRight: 0,
        
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://cdn.cdnparenting.com/articles/2018/03/287152637-H.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>KIDS</Text>
      </View>
      <View
        style={{
          backgroundColor: `orange`,
          padding: 10,
          margin: 10,
          marginRight: 0,
       
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
            "https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/reebok_enUS/Images/20SS_Float_running_IWallpaper-Tile3_DT_04082020_tcm274-481755.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `red`,
          padding: 10,
          margin: 10,
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
          backgroundColor: `blue`,
          padding: 10,
          margin: 10,
          marginRight: 0,
         
        }}
      >
        <Image
          style={styles.carouselImages}
          source={{
            uri:
              "https://cdn.cdnparenting.com/articles/2018/03/287152637-H.jpg",
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
        marginTop:10
      },
      carouselImages:{ 
        height: 100, 
        width: 100 
      },
      carouselText:{ 
        color: "white", 
        textAlign: "center" 
      },
})