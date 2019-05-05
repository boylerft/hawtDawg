// warning triggered for low battery (below 15%) app cannot be used at low charge for device or phone!
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Button,
} from 'react-native';
import { MonoText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(232,232,232)',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  getStartedText: {
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  android: {
   elevation: 20,   
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:90,
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "rgb(224,0,0)",
  },
  redBarContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
    marginBottom:30,
    backgroundColor: "rgb(224,0,0)",
  },
  redBarText: {
    fontSize: 22,
    color: 'white',
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
  },
});

export default class LowBatteryScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };

    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.getStartedContainer} contentContainerStyle={styles.contentContainer}>

          <View style ={styles.redBarContainer}>
            <Text style={styles.redBarText}>ATTENTION!</Text>
          </View>

          <View style ={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>To ensure the safety of your passengers, make sure battery is sufficiently charged before using features.</Text>
         
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Acknowledge</Text>
            </TouchableHighlight>
          </View>

          </ScrollView>
        </View>
      );
    }
  }