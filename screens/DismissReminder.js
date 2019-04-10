// home screen for reminder feature; dismiss leads to home screen until destination is reached.
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

export default class DismissReminderScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.getStartedText}>
              You will be reminded to remove your passengers at your destination.
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