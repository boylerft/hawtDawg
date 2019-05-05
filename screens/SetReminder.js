/*This is an Example of Timer/Stopwatch in React Native */
import React, { ScrollView, Component } from 'react';
//import React in our project
import { StyleSheet,Text,View, TouchableHighlight } from 'react-native';
//import all the required components
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
//importing library to use Stopwatch and Timer
 
export default class SetReminder extends Component {
    static navigationOptions = {
        header: null,
      };
      
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 0,
      resetTimer: false,
      resetStopwatch: false,
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.addFiveMinutes = this.addFiveMinutes.bind(this);
  }

  componentWillUnmount = () => {            
               
  }; 

  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true, timerDuration: 0});
  }
  addFiveMinutes() {
      this.setState({isTimerStart: false, timerDuration: 300000 + this.state.timerDuration});
      this.setState({resetTimer : true});
  }
  getFormattedTime(time) {
      this.timer
  }
  render() {
    return (
      <View style={{backgroundColor:'rgb(232,232,232)', flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center'}}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Set your alarm, start it, and we'll remind you to remove your passengers.</Text>
          </View>
          <Timer 
            totalDuration={this.state.timerDuration} secs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time 
            getTime={this.getFormattedTime} 
            />
          
          <TouchableHighlight onPress={this.startStopTimer}>
            <Text style={{fontSize: 20, marginTop:10, color: 'rgba(96,100,109, 1)'}}>
               {!this.state.isTimerStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{fontSize: 20, marginTop:10, color: 'rgba(96,100,109, 1)'}}>RESET</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.addFiveMinutes}>
            <Text style={{fontSize: 20, marginTop:10, color: 'rgba(96,100,109, 1)'}}>ADD 5 MINUTES</Text>
          </TouchableHighlight>
          
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Done</Text>
            </TouchableHighlight>
        </View>  
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("Custom Completion Function");
const handleTimerComplete2 = () => this.props.navigation.navigate('Home');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(232,232,232)',
    },
    getStartedText: {
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom:20,
  },
  getStartedContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom:20,
    textAlign: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "rgb(224,0,0)",
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
  }
});

const options = {
  container: {
    backgroundColor: "rgb(224,0,0)",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};