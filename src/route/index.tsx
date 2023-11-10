import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Login';
import splash from './src/screens/splash';



const Stack = createNativeStackNavigator();

 function RootNavigator() {
  return (
    <NavigationContainer>{
        
        <Stack.Navigator initialRouteName={'splash'}>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="splash" component={splash} />
        </Stack.Navigator>
          } 
        </NavigationContainer>
  );
}

export default RootNavigator;