import { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import SettingsIcon from 'react-native-vector-icons/Ionicons'
import CalendarIcon from 'react-native-vector-icons/MaterialIcons'
import ScissorIcon from 'react-native-vector-icons/Fontisto' 

import { verticalScale } from 'react-native-size-matters';

import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Link } from "expo-router";


interface MyButtonProps {
    title: string
}

const MyButton: React.FC<MyButtonProps> = ({ title }) => {

    const LinkHandler = () => {
        if (title === "Configuração") {
            return "/AgendamentoScreen"
        } else if (title === "Agendamento") {
            return "/AgendamentoScreen"
        }
        else if(title === 'Corte & Estilo'){
            return "/AgendamentoScreen"
        }
    }

    return (
        <TouchableOpacity style={styles.button}>
            <Icon vector={title}/>
            <Text style={styles.text}>{title}</Text>
            <Link href={title}/>
        </TouchableOpacity>
        );
};

interface IconProps{
    vector: string;
}

const Icon: React.FC<IconProps> = ({ vector }) => {
    if (vector === "Configuração") {
      return <SettingsIcon name="settings" size={25} color="#F2F4F3" />;
    } else if (vector === "Agendamento") {
      return <CalendarIcon name="edit-calendar" size={25} color="#F2F4F3" />;
    }
    else if(vector === 'Corte & Estilo'){
        return <ScissorIcon name="scissors" size={25} color='#F2F4F3'/>
    }
};

export function CardHomePage() {
    const [data, setData] = useState([
        {id: 1, name: 'Agendamento'},
        {id: 2, name: 'Corte & Estilo'},
        {id: 3, name: 'Configuração'},
    ])

    return (
        <View style={styles.container}>
            <FlatList data={data}
            renderItem={({item}) => (
                <MyButton
                title={item.name ? item.name : 'undefined'}/>
            )}>
            </FlatList>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    },

    button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        padding: verticalScale(75),
        marginTop: verticalScale(15),
        width: widthPercentageToDP(93),
        backgroundColor: '#000000',
      },

    text: {
        color: '#F2F4F3',
        fontSize: 19,
    }
}