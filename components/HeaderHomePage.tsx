import { View, StyleSheet, Text } from "react-native";

import { verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Entypo';

export function HeaderHomePage() {
    return (
    <View style={styles.container}>
      <Icon name='scissors' size={30} color='#F2F4F3'/>
      <Text style={styles.text}>BarberPoint</Text>
      <Icon name='scissors' size={30} color='#F2F4F3' style={styles.scissorRotation}></Icon>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: "#000000",
      padding: verticalScale(16)
    },

    text: {
      color: '#F2F4F3',
      fontSize: 20,
      fontWeight: 'bold'
    },

    scissorRotation: {
      transform: [{rotate: '180deg'}]
    }
  })
