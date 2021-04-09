import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import validation from '../../utils/validation';
import api from '../../apis';
import {setUserData} from '../../utils/utils';
import {showMessage} from 'react-native-flash-message';
import {loginUsingPhone} from '../../redux/actions/auth';
import Loader from '../../Components/Loader';

export default class Login extends Component {
  state = {
    password: '',
    mobile: '',
    isLoading: false,
  };

  onChange(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  isValidData = () => {
    let {mobile, password} = this.state;
    const error = validation({ password: password,phoneNumber: mobile,});
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

  usingPhone = () => {
    let {mobile} = this.state;
    if (this.isValidData()) {
      loginUsingPhone({
        contactDetails: {
          phoneNo: mobile,
          countryCode: '+91',
          countryCodeISO: 'IN',
        },
      })
        .then(res => {
          isLoading=true,
          console.log(res);
          this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION,{data:res.data.userId});
        })
        .catch(error => {
          isLoading=false
          console.log(error);
        });
        this.setState({
          isLoading:true
        })
    }
  };

  render() {
    const {isLoading}=this.state
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
          <TextInput
            placeholder="ENTER MOBILE"
            style={{borderWidth: 0.2, marginTop: 10}}
            onChangeText={this.onChange('mobile')}/>
          <TextInput
            placeholder="ENTER PASSWORD"
            style={{borderWidth: 0.2, marginTop: 10}}
            onChangeText={this.onChange('password')}
            password={true}
            secureTextEntry={true}
          />
          <View style={{marginTop: 20}}>
            <Button onPress={this.usingPhone} title="LOGIN ACCOUNT" />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 80, marginTop: 40}}>
            <Text>New Customer?</Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(navigationStrings.SIGN_UP)
              }>
              <Text style={{color: 'blue'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <Loader isLoading={isLoading}/>
      </WrapperContainer>
    );
  }
}
