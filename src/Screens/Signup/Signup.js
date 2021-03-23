import React,{Component} from 'react'
import {View,Text, TextInput,TouchableOpacity} from 'react-native'
import api from '../../apis'
import navigationStrings from '../../constants/navigationStrings'
import validation from '../../utils/validation'

export default class Signup extends Component{
  
  // isLoad=()=>{
  //   api.Signup({
  //     name:'Taniv',
  //     email:'abc@gmail.com',
  //     password:'abcdefgh'
  //   }).then(res=>{
  //     console.log(JSON.stringify(res));
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }

  render(){
    return(
      <View style={{marginTop:10}}>
        <Text style={{textAlign:'center'}}>SignUp</Text>
        <View style={{marginTop:10}}>
        <TextInput placeholder='Name' style={{marginLeft:40,borderWidth:0.2,width:280,height:40}}/>
        <TextInput placeholder='Email' style={{marginLeft:40,borderWidth:0.2,width:280,height:40,marginTop:20}}/>
        <TextInput placeholder='Password' style={{marginLeft:40,borderWidth:0.2,width:280,height:40,marginTop:20}}/>
        <View style={{marginTop:20}}>
       <TouchableOpacity>
         <Text style={{textAlign:'center',borderWidth:0.2,width:150,marginLeft:90,backgroundColor:'#dcdcdc'}}>SignUp</Text>
       </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection:'row',marginLeft:80,marginTop:40}}>
          <Text>
            Already exists?
          </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={{color:'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}