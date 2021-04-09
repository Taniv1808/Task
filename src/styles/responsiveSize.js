import { Dimensions, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const moderateScaleVertical = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;
const textScale = percent => {
	const screenHeight = Dimensions.get('window').height;
	//calculate absolute ratio for bigger screens 18.5:9 requiring smaller scaling
	const ratio = Dimensions.get('window').height / Dimensions.get('window').width;
	//Guideline sizes are based on standard ~5″ screen mobile device
	const deviceHeight = 375
		? screenHeight * (ratio > 1.8 ? 0.14 : 0.15) //Set guideline depending on absolute ratio
		: Platform.OS === 'android'
			? screenHeight - StatusBar.currentHeight
			: screenHeight;

	const heightPercent = (percent * deviceHeight) / 100;
	return Math.round(heightPercent);
};

export { scale, verticalScale, textScale, moderateScale, moderateScaleVertical,width,height };






// btnABlue: '#306F94',
//   btnBBlue: '#32A3E0',
//   textBlue:"#1A76CA",
//   white: '#FFFFFF',
//   black:"#000000",
//   textGrey:"#1E2428",
//   textGreyLight:"#8F92A1",
//   lightSky:"rgba(67,162,231,0.3)",
//   borderLight:"rgba(30,36,40,.2)",
//   textGreyOpcaity7:"rgba(30,36,40,.7)",
//   bottomBarGradientA:"rgba(50,181,252,1)",
//   bottomBarGradientB:"rgba(97,160,242,1)",
//   transparent:'transparent',
//   backgroundGrey:"#F4F7FA",
//   backgroundGreyB:"#E2E6E9",
//   whiteOpacity22:"rgba(255,255,255,0.22)",
//   blackOpacity10:"rgba(0,0,0,0.1)",
//   blackOpacity0:"rgba(0,0,0,0)",
//   blackOpacity43:"rgba(0,0,0,0.43)",
//   blackOpacity86:"rgba(0,0,0,0.86)",
//   green:"#3B9D38",
//   orange:"#E9610B",
//   lightGreyBorder:"#E2E2E2",
//   textGreyB:"#8E9193",
//   buyBgDark:"#282828",
//   whiteOpacity77:"rgba(255,255,255,0.77)",
//   lightGreyBg:"#e8e8e8"
