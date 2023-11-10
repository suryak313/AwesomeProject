import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import {Text,View,} from 'react-native';


function splash(): JSX.Element {
const navigation = useNavigation();
    useEffect(() => {
            setTimeout(() => {
            console.log ('Dragon')
            navigation.dispatch(StackActions.replace('Login'));
        }, 2000);
    },[]
    )
  return ( 
     <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
      <Text>splashscreen</Text>
    </View>         
    );
}

export default splash;







