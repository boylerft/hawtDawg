// screen forces user to acknoledge state law before using the leave-in-car feature. Acknowledge routes to leave in car home.
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

export default class StateLawScreen extends React.Component {
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
              It is illegal in the state of California to leave a child up to six years old and to leave pets unattended in conditions that present a significant risk to their health and safety.
            </Text>
            <View style={styles.welcomeContainer}>
              <Button
                  title="Acknowledge"
                  onPress={() =>
                      this.props.navigation.navigate('LeaveInCar')
                  }
               />
            </View>
          </ScrollView>
        </View>
      );
    }
  }