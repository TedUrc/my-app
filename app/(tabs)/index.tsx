import { View } from 'react-native';
import { HeaderHomePage } from '@/components/homepage/HeaderHomePage';
import { BlockCard } from '@/components/homepage/BlockCard';

export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <HeaderHomePage/>
      <BlockCard/>
    </View>
  );
}


