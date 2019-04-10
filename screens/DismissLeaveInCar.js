// home screen for the leave-in-car feature; disarm leades to home screen until dangerous conditions is triggered.
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

export default class DismissLeaveInCarScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.getStartedText}>
              Current Temperature:
            </Text>
            <Text style={styles.getStartedText}>
              Estimated Time Left:
            </Text>
            <View style={styles.welcomeContainer}>
              <Button
                  title="Dismiss"
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