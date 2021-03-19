import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import GradientButton from '../../Components/GradientButton';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';

export default function Signup({navigation}) {
  const [state, setState] = useState({
    isLoading: false,
    callingCode: '1',
    cca2: 'US',
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const updateState = (data) => setState((state) => ({...state, ...data}));

  const moveToNewScreen = (screenName, data) => () => {
    navigation.navigate(screenName, {});
  };

  const onSignup = () => {
    moveToNewScreen(navigationStrings.OTP_VERIFICATION, {
      data: {phoneNumber},
    })();
  };
  const _onChangeText = (key) => (val) => {
    updateState({[key]: val});
  };

  const {phoneNumber, name, email, password} = state;
  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        <View style={{marginTop: moderateScaleVertical(100)}}>
          <Text style={styles.header}>{strings.CREATE_YOUR_ACCOUNT}</Text>
          <Text style={styles.txtSmall}>{strings.ENTER_DETAILS_BELOW}</Text>
        </View>

        <View
          style={{
            marginTop: moderateScaleVertical(50),
            marginHorizontal: moderateScale(24),
          }}>
          <TextInput
            onChangeText={_onChangeText('name')}
            placeholder={strings.YOUR_NAME}
            value={name}
            style={{borderWidth:0.2}}
          />
          <TextInput
            onChangeText={_onChangeText('email')}
            placeholder={strings.YOUR_EMAIL}
            value={email}
            style={{borderWidth:0.2,marginTop:6}}
          />
          <View style={{height:7}} />
          <TextInput
            onChangeText={_onChangeText('password')}
            placeholder={strings.ENTER_PASSWORD}
            value={password}
            style={{borderWidth:0.2}}
          />
          <GradientButton
            onPress={onSignup}
            marginTop={moderateScaleVertical(10)}
            btnText={strings.SIGNUP_AN_ACCOUNT}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
            {strings.ALREADY_HAVE_AN_ACCOUNT}
            <Text
              onPress={moveToNewScreen(navigationStrings.LOGIN)}
              style={{
                color: colors.themeColor,
                fontFamily: fontFamily.futuraBtHeavy,
              }}>
              {' '}
              {strings.LOGIN}
            </Text>
          </Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
