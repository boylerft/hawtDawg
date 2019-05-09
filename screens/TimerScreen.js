import React from 'react';
import { Notifications, Permissions, Constants } from 'expo';
import { Text, View, Button } from 'react-native';


Notifications.createCategoryAsync('myCategoryName', [
    {
        actionId: 'vanillaButton',
        buttonTitle: 'Plain Option',
        isDestructive: false,
        isAuthenticationRequired: false,
    },
    {
        actionId: 'highlightedButton',
        buttonTitle: 'Destructive!!!',
        isDestructive: true,
        isAuthenticationRequired: false,
    },
    {
        actionId: 'requiredAuthenticationButton',
        buttonTitle: 'Click to Authenticate',
        isDestructive: false,
        isAuthenticationRequired: true,
    },
    {
        actionId: 'textResponseButton',
        buttonTitle: 'Click to Respond with Text',
        textInput: { submitButtonTitle: 'Send', placeholder: 'Type Something' },
        isDestructive: false,
        isAuthenticationRequired: false,
    },
]);

export default class AppContainer extends React.Component {
    state = {
        notification: {},
        token: '',
    };



    registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(
                    Permissions.NOTIFICATIONS
                );
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            this.setState({ token });
        } else {
            alert('Must use physical device for Push Notifications');
        }
    };

    componentDidMount() {
        this.registerForPushNotificationsAsync();
        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(
            this._handleNotification
        );
    }

    _handleNotification = notification => {
        this.setState({ notification: notification });
    };

    // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
    sendPushNotification = async () => {
        fetch('https://exp.host/--/api/v2/push/send', {
            body: JSON.stringify({
                to: this.state.token,
                title: 'Car Interior Temperature',
                body:
                    'The vehicle is at 70 F!',
                data: {},
                _category: `${Constants.manifest.id}:myCategoryName`,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    };

    delayedNotification = () => {
        setTimeout(() => {
            this.sendPushNotification();
        }, 2000);
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Origin: {this.state.notification.origin}</Text>
                    <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
                </View>
                <Text style={{ padding: 20 }}>
                    To see the interactive notification, press the button and
                    send the app to the background.
                </Text>
                <Button
                    title={'Press to Send Delayed Notification'}
                    onPress={() => this.delayedNotification()}
                />
            </View>
        );
    }
}