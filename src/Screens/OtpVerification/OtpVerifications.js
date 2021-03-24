import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import {otpTimerCounter} from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { _OtpVerification } from '../../redux/actions/auth';
import { cos } from 'react-native-reanimated';
import Loader from '../../Components/Loader';
Loader
const CELL_COUNT = 5;
export default function OtpVerifications({navigation,route}) {
  const [state, setState] = useState({
    timer: 100,
    otp: '',
    isLoading:false
  });

  const updateState = data => setState(state => ({...state, ...data}));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({timer: timer - 1});
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);

  //RESTING THE TIMER AND REQUEST FOR NEW OTP
  const _onResend = () => {
    updateState({timer: 120});
  };

  const onChangeOtp = otp => {
    updateState({otp});
  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({otp: state.otp, cellCount: CELL_COUNT});
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

  const onVerifyOtp = () => {
    let {isLoading}=state
    _OtpVerification({
      "userId": route.params.data,
    "otp" : "12345",
    "deviceToken":"123",
    "registerFrom" : "ANDROID"
}).then((res)=>{
  isLoading=true
  console.log(res)
  navigation.navigate(navigationStrings.HOME)
}).catch((error)=>{
  console.log(error)
  isLoading=false
})
updateState({isLoading:true})

  };

  const {timer,isLoading} = state;
  return (
    <WrapperContainer>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{alignSelf: 'flex-start'}}>
          <Image source={imagePath.back} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: moderateScaleVertical(88),
          marginHorizontal: moderateScale(0),
        }}>
        <Text style={styles.header}>{strings.OTP_VERIFICATION}</Text>
        <Text style={styles.txtSmall}>{strings.ENTER_OTP_SENT}</Text>
        <View style={{height: moderateScaleVertical(40)}} />
        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.root}
          blurOnSubmit
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          selectionColor={colors.themeColor}
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <TouchableOpacity onPress={onVerifyOtp} style={{borderWidth:0.2,width:220,marginLeft:80,height:30,borderRadius:27,backgroundColor:'#dcdcdc'}}>
          <Text style={{textAlign:'center',padding:6}}>VERIFY ACCOUNT</Text>
        </TouchableOpacity>
        {timer > 0 ? (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
              {strings.RESEND_CODE_IN}
              <Text
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {`${otpTimerCounter(timer)} min`}
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
              {strings.DIDNT_GET_OTP}
              <Text
                onPress={_onResend}
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {' '}
                RESEND CODE
              </Text>
            </Text>
          </View>
        )}
      </View>
      <Loader isLoading={isLoading}/>
    </WrapperContainer>
  );
}
