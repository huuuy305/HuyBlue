import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Menu from '../screens/Menu';

const Stack = createStackNavigator();

function  RootNativation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNativation;