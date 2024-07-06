import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import SpashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import TabNavigators from './TabNavigators';
import OtpScreen from '../screen/OtpScreen';
import ChatBots from '../screen/ChatBots';
import TermsAndCondition from '../screen/TermsAndCondition';

const Stack = createNativeStackNavigator();
const StackNavigators = () => {
    const [splash, setSplash] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 2000)
    })
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'splash'}>
                {
                    splash ? <Stack.Screen name="splash" component={SpashScreen} /> : <Stack.Screen name="login" component={LoginScreen} />
                }
                <Stack.Screen name="TabNavigators" component={TabNavigators} />
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="chatbot" component={ChatBots} />
                <Stack.Screen name="otp" component={OtpScreen} />
                <Stack.Screen name="termsAndCondition" component={TermsAndCondition} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default StackNavigators;