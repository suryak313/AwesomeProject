

import React from 'react'
import Login from ./Login;
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import {
    Text,
    Alert,
    View,
} from 'react-native';

function LoginScreen(): JSX.Element {
    const navigation = useNavigation();
    setTimeout(() => {
     Alert.alert("Move to next screen");
    }, 1000);

    return (
        <View>
            <Text>"Hello Login"</Text>

        </View>
    );
}
export default LoginScreen;





   
