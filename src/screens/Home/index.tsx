import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Layout, Input} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import WifiManager from 'react-native-wifi-reborn';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Player'>;
};

const connectToHotspot = async () => {
  try {
    const enabled = await WifiManager.connectToProtectedSSIDOnce(
      'hdzero',
      'divimath',
      false,
      true,
    );
    console.log('Hotspot enabled:', {enabled});
  } catch (error) {
    console.log('Error checking hotspot:', {error});
  }
};

export const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const [value, setValue] = React.useState('rtsp://192.168.2.122:8554/hdzero');

  const navigateDetails = () => {
    navigation.navigate('Player', {url: value});
  };

  // useEffect(() => {
  //   connectToHotspot();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Input
          style={{width: '80%', marginBottom: 20}}
          placeholder="Enter URL"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button onPress={navigateDetails}>Go to Player</Button>
      </Layout>
    </SafeAreaView>
  );
};
