// Screen marking arrival at destination and reminder trigger. Disarm button returns to home screen.
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

export default class DisarmLeaveInCarScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.getStartedText}>
              You have reached your destination! Remember to take your passengers with you.
            </Text>
            <View style={styles.welcomeContainer}>
              <Button
                  title="Disarm"
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