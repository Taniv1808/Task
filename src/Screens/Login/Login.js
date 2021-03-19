import React from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import validation from '../../utils/validation';
import apis from '../../apis';

export default function OtpVerification({navigation}) {
  const onLogin = () => {
    navigation.navigate(navigationStrings.HOME);
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
        <TextInput placeholder='YOUR NAME' style={{borderWidth:0.2,marginTop:10}} />
        <TextInput placeholder='ENTER PASSWORD' style={{borderWidth:0.2,marginTop:10}}/>
        <TextInput placeholder="Enter your email"style={{borderWidth:0.2,marginTop:10}} />

        <Button
          onPress={onLogin}
          title='LOGIN ACCOUNT'
          style={{marginTop:20}}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
}
