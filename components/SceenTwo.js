import * as React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
  ImageBackground
} from 'react-native';

export default function ScreenOne() {
  return (
      
    <ScrollView >
      <View style={styles.circle}>
        <Image source={require('../assets/circle.png')} />
      </View>
      <View style={styles.titles}>
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style={styles.description}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtButton}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtButton}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottom}>HOW WE WORK?</Text>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    marginTop: 150,
  },
  titles: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 20,
  },
  description: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#E3C000',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  txtButton: {
    fontWeight: 'bold',
  },
  bottom: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
});
