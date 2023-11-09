
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from './Screens/splash';
import HomeScreen from './Screens/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'splash'}>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="splash" component={splash} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;