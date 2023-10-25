

import React from 'react'
import Login from ./LoginScreen;
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import {
    Text,
    Alert,
    View,
} from 'react-native';

function splash(): JSX.Element {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.dispatch(StackActions.replace(Login));
        Alert.alert("Move to next screen");
    }, 2000);
    return (
        <View>
            <Text>"Hello Splash"</Text>
            
        </View>
    );
}
export default splash;







