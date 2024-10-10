import { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export function BlockCard() {
    const [data, setData] = useState([
        {id: 1, name: 'Sobre Nós'},
        {id: 2, name: 'Agendamento'},
        {id: 3, name: 'Corte & Estilo'},
        {id: 5, name: 'Configuração'},
    ])

    const styles = {
        container: {
            flex: 1,
            alignItems: 'center'
        },

        card: {
            alignItems: 'center',
            borderRadius: 10,
            borderColor: '#D3D3D3',
            borderWidth: 1,
            padding: verticalScale(55),
            marginBottom: verticalScale(12),
            width: widthPercentageToDP(93)
          },
    }

    return (
        <View style={styles.container}>
            <FlatList data={data}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Text>{item.name}</Text>
                </View>
            )}>
            </FlatList>
        </View>
    )
}