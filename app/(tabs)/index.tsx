import AgendamentoScreen from '@/components/AgendamentoScreen';
import { CardHomePage } from '@/components/CardHomePage';
import { HeaderHomePage } from '@/components/HeaderHomePage';
import Login  from '@/components/Login';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: "#FFEEF2"}}>
      <HeaderHomePage/>
      <Login/>
    </View>
  );
}


