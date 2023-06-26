import React from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {VLCPlayer} from 'react-native-vlc-media-player';
import Orientation from 'react-native-orientation';

type PlayerProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Player'>;
  route: {params: {url: string}};
};

export const Player: React.FC<PlayerProps> = ({route}) => {
  const {url} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <VLCPlayer
        style={[styles.video]}
        autoplay={true}
        source={{uri: url}}
        videoAspectRatio="16:9"
        Orientation={Orientation}
      />
    </SafeAreaView>
  );
};

const styles = {
  video: {
    flex: 1,
  },
};
