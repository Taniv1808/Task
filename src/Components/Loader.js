// import React from 'react';
// import {View, Modal, ActivityIndicator} from 'react-native';

// import {BarIndicator} from 'react-native-indicators';
// import commonStyles from '../styles/commonStyles';
// import colors from '../styles/colors';

// const LoadingComponent = () => (
//   <View
//     style={{
//       ...commonStyles.loader,
//       backgroundColor: 'rgba(0,0,0,0.3)',
//       elevation: 5,
//     }}>
//     <BarIndicator size={25} color={colors.themeMain} />
//   </View>
// );
// const Loader = ({isLoading = false, withModal}) => {
//   if (withModal) {
//     return (
//       <Modal transparent visible={isLoading}>
//         <LoadingComponent />
//       </Modal>
//     );
//   }
//   if (isLoading) {
//     return <LoadingComponent />;
//   }
//   return null;
// };

// export default Loader;

import React from 'react';
import {ActivityIndicator,View,StyleSheet}from 'react-native';

export default function Loader({isLoading}){
    if(isLoading){
        return(
        <View style={styles.load}>
        <ActivityIndicator color="red"  size="large"/>
        </View>
        )
    }

    return(null);
}

const styles=StyleSheet.create({
    load:{
        position:'absolute',
        top:0,right:0,left:0,bottom:0,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dcdcdc"}
})