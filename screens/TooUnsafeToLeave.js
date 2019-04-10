
// screen telling user it is too dangerous to use the leave-in0car feature. Acknoledge returns to home screen.
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import styles from './HomeScreen';

export default class UnsafeScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.getStartedText}>
              ATTENTION!
            </Text>
            <Text style={styles.getStartedText}>
              Conditions are too dangerous to leave passengers unattended in your vehicle at this time.
            </Text>
            <View style={styles.welcomeContainer}>
              <Button
                  title="Acknowledge"
                  onPress={() =>
                      this.props.navigation.navigate('Home')
                  }
               />
            </View>
          </ScrollView>
        </View>
      );
    }
  }