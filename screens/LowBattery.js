// warning triggered for low battery (below 15%) app cannot be used at low charge for device or phone!
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

export default class LowBatteryScreen extends React.Component {
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
              Smart phone or cabin monitor battery is too low. Battery charge must be higher to use this feature.
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