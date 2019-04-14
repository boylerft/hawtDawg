/*This is an example of CountDown Timer*/
import React, { Component } from 'react';
//import React in our project
import { View, TextInput } from 'react-native';
//import all the component we need in our project
import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer
import moment from 'moment';
//import moment to help you play with date and time

export default class App extends Component {

    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            totalDuration: '',
        };
    }
    componentDidMount() {
        var that = this;
        //We are showing the coundown timer for a given expiry date-time
        //If you are making a quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec
        /*
        var date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC
        var expirydate = '2018-08-23 04:00:45';//You can set your own date-time
        //Let suppose we have to show the countdown for above date-time
        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        */
        var timeUntiExpire = 30;
        //converting in seconds
        that.setState({ totalDuration: timeUntiExpire });
        //Settign up the duration of countdown in seconds to re-render
    }
    render() {
        console.log(this.state.totalDuration);
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <CountDown
                    until={this.state.totalDuration}
                    //duration of countdown in seconds
                    timetoShow={('H', 'M', 'S')}
                    //formate to show
                    onFinish={() => alert('finished')}
                    //on Finish call
                    onPress={() => alert('hello')}
                    //on Press call
                    size={20}
                />
            </View>
        );
    }
}