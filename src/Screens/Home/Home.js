import React,{Component} from 'react'
import {View,Text,Image, TextInput, ScrollView, FlatList,TouchableOpacity} from 'react-native'
import Carousel from '../../Components/Carousel'
import Cart from '../../Components/Cart'
import Decathlon from '../../Components/Decathlon'
import Hoarding from '../../Components/Hoarding'
import Terms from '../../Components/Terms'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            img:[{
                id:1,
                img:'https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/l/plus-size-clothing-men-shirts-long-sleeve-2017-new-spring-solid-color-slim-fit-shirt-cotton-casual-shirt-men-clothes-extra-image-4.jpg',
                price:'5600'
            },
            {
        id:2,
    img:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/2104/9881/New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Plaid-Cotton-Casual__15044.1569933891.jpg?c=2',
    price:'700',
    iterator: 1,
      counter: 0,
      emptyArray: [],
}]
            
    }
}
addCart = (item) => {
    let { counter, emptyArray } = this.state;
    let newCart = [...emptyArray, ...[item]];
    let index = emptyArray.findIndex((data) => data.id == item.id);
    if (!(index == -1)) {
      alert('Already added')
      this.setState({

      });
    }else{
    this.setState({
      emptyArray: newCart,
      counter: counter + 1,
    });}
  };
    render(){
        const{img}=this.state
        let {counter,emptyArray}=this.state
        return(
            <View>
            <Decathlon/>
            <ScrollView>
                <Carousel/>
                <Hoarding/>
                <Terms/>
                <FlatList
            data={img}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 10 }}></View>
            )}
            renderItem={({ item }) => (
              <Cart data={item} onAdd={this.addToCart}></Cart>
            )}
            onAdd={this.addCart}
          />
            </ScrollView>
            </View>
            
        )
    }
}