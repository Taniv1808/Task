import React from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import api from '../../apis'

export default function OtpVerification({navigation}) {
  this.state={
    email:'',
    password:'',
}
  const onLogin = () => {
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };
  isValidData = () => {
    let {email, password} = this.state;
   const error = Validation({ email: email, password: password});
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
        <TextInput placeholder={strings.YOUR_EMAIL} style={{borderWidth:0.2,marginTop:10}} />
        <TextInput placeholder={strings.ENTER_PASSWORD} style={{borderWidth:0.2,marginTop:10}}/>

        <TextInput placeholder="Enter your email"style={{borderWidth:0.2,marginTop:10}} />

        <Button
          onPress={this.isValidData()}
          title='LOGIN ACCOUNT'
          style={{marginTop:20}}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
}
