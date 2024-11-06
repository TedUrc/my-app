import * as React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { verticalScale } from 'react-native-size-matters';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const AVAILABLE_TIMES = [
    { id: 1, hour: '07:00 PM', status: 'available' },
    { id: 2, hour: '07:15 PM', status: 'unavailable' },
    { id: 3, hour: '07:30 PM', status: 'available' },
    { id: 4, hour: '08:30 PM', status: 'unavailable' },
    { id: 5, hour: '08:45 PM', status: 'available' },
    { id: 6, hour: '09:00 PM', status: 'available' },
  ]

function AgendamentoScreen(){
    const [timeSelected, setTimeSelected] = useState(null);

    return(
        <View style={{flex:1}}>
            <Text style={styles.sectionTitle}>Agendamento</Text>
            
            <View style={styles.availableTimeList}>
              {AVAILABLE_TIMES.map(({ id, hour, status }) => {
                const isTimeEnabled = status === 'available'
                const isTimeSelected = timeSelected === hour

                const defaultBg = isTimeEnabled ? '#FFEEF2' : '#ebe9f6'
                const defaultColor = isTimeEnabled ? '#222222' : '#aeaeb0'

                return (
                  <Pressable
                    key={id}
                    style={[
                      styles.availableTimeButton,
                      { backgroundColor: isTimeSelected ? '#000000' : defaultBg }
                    ]}
                    onPress={() => setTimeSelected(hour)}
                    disabled={!isTimeEnabled}
                  >
                    <Text
                      style={[
                        styles.availableTimeButtonText,
                        { color: isTimeSelected ? '#ffffff' : defaultColor }
                      ]}>
                      {hour}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
            <TouchableOpacity style={styles.ConfirmScheduleButton}>
              <Text style={styles.ConfirmScheduleButtonText}>Confirm Schedule</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      marginHorizontal: 'auto',
      fontWeight: 'bold',
      marginVertical: 24,
      fontSize: 18,
    },
    wrapper: {
      paddingHorizontal: 24
    },

    sectionTitle: {
      alignSelf: 'center',
      fontWeight: 'bold',
      marginVertical: 24,
      fontSize: 20,
    },
    availableTimeList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 64,
    },
    availableTimeButton: {
      width: widthPercentageToDP('30%'),
      marginBottom: 6,
      marginLeft: 4,
      paddingVertical: verticalScale(16),
      borderRadius: 10,
      alignSelf: 'flex-start',
      alignItems: 'center'
    },
    availableTimeButtonText: {
      fontWeight: 'bold',
      fontSize: 12
    },
    ConfirmScheduleButton: {
      width: widthPercentageToDP('80%'),
      alignSelf: 'center',
      backgroundColor: '#000000',
      padding: verticalScale(15),
      borderRadius: 10,
      alignItems: 'center'
    },
    ConfirmScheduleButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff'
    }
  });

export default AgendamentoScreen;