import { View, StyleSheet } from "react-native";

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export function HeaderHomePage() {
    return (
    <View style={styles.container}>
      <View style={styles.image}/>
      <View style={styles.border}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: verticalScale(20),
      alignItems: 'center'
    },
    
    border: {
      width: widthPercentageToDP(93),
      height: 1,
      borderRadius: 8,
      backgroundColor: '#D3D3D3'
    },

    image: {
      padding: verticalScale(15)
    }
  })
