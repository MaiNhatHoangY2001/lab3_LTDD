import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ScreenOne from './components/ScreenOne';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const background = {
    backScreen1: require('./assets/background.png'),
    backScreen2: require('./assets/background.png'),
  };

  const getBackground = () => {
    return background.backScreen1;
  };

  return (
    <ImageBackground style={styles.container} source={getBackground()}>
      <ScrollView>
        <ScreenOne />
        <Button style={{ marginTop: 50 }} title="Screen 1" />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
});
