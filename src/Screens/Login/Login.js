import React,{Component} from 'react';
import {View, Text, TextInput,Button,TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import validation from '../../utils/validation';
import api from '../../apis';
import { setUserData } from '../../utils/utils';
import { showMessage } from 'react-native-flash-message';

export default class Login extends Component {
    state={
      email:'',
      password:'',
      isLoading:false
  }

onChange(key){
return(value)=>{
   this.setState({
       [key]:value
   })
}
}
isValidData = () => {
let {email, password} = this.state;
const error = validation({ email: email, password: password});
if (error) {
showMessage({
  type: 'danger',
  icon: 'danger',
  message: error,
});
return false;
}
return true;
};

loader=()=>{
let {email,password,isLoading}=this.state
if(this.isValidData()){
 this.setState({
   isLoading:true,
 });
 api.Login({
   email:email,
   password:password,

 }).then(res=>{
   console.log(JSON.stringify(res))
   this.setState({
     isLoading:false
   })
   showMessage({
     type: 'success',
     icon: 'success',
     message: "Done",
   });
   setUserData(res.data).then(
     this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION)
   )
 }).catch(error=>{
   console.log(error) 
   this.setState({
     isLoading: false
   })
 showMessage({
   type: 'danger',
   icon: 'danger',
   message: error,
 });
})
}
}
   render(){
  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: 24,
        }}>
        <View style={{height: 48}} />
        <Text style={styles.header}>LOGIN YOUR ACCOUNT</Text>
        <Text style={styles.txtSmall}>ENTER REGISTERED EMAIL</Text>
        <View style={{height: 50}} />
        <TextInput placeholder='ENTER EMAIL' style={{borderWidth:0.2,marginTop:10}} onChangeText={this.onChange('email')}/>
        <TextInput placeholder="ENTER PASSWORD"style={{borderWidth:0.2,marginTop:10}} onChangeText={this.onChange('password') } password={true} secureTextEntry={true}/>
<View style={{marginTop:20}}>
        <Button onPress={()=>{this.isValidData()?(this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION)):null}} title='LOGIN ACCOUNT'
        
        />
        </View>
        <View style={{flexDirection:'row',marginLeft:80,marginTop:40}}>
          <Text>
            New Customer?
          </Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(navigationStrings.SIGN_UP)}>
            <Text style={{color:'blue'}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
}
}