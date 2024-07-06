import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import StackNavigators from './StackNavigators';
import SpashScreen from '../screen/SplashScreen';
import OrderScreen from '../screen/OrderScreen';
import DietScreen from '../screen/DietScreen';
import InputScreen from '../screen/InputScreen';
import DietCart from '../screen/DietCart';
import home from '../../assets/img/home.jpg'
import homePink from '../../assets/img/homePink.jpeg'
import Order from '../../assets/img/order.jpg'
import OrderPink from '../../assets/img/OrderPink.jpeg'
import Cart from '../../assets/img/cart.jpg'
import CartPink from '../../assets/img/CartPink.jpeg'
import Diet from '../../assets/img/dietnav.jpeg'
import DietPink from '../../assets/img/DietPink.jpeg'
import Output from '../../assets/img/onputnav.jpeg'
import InputPink from '../../assets/img/InputPink.jpeg'

const Tab = createBottomTabNavigator();
const TabNavigators = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
                activeTintColor: '#F79489',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                // options={{
                //     tabBarIcon: () => (<Image source={require("../../assets/img/home.jpg")} style={{ width: 20, height: 20 }} />),
                //     activeTintColor: 'red',
                //     inactiveTintColor: 'red',
                // }}
                options={({ route }) => ({
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Image source={focused ? homePink : home} style={{ width: 20, height: 20 }} />
                    )

                })}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Image source={focused ? OrderPink : Order} style={{ width: 20, height: 20 }} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={DietCart}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Image source={focused ? CartPink : Cart} style={{ width: 20, height: 20 }} />
                    )
                }}
            />
            <Tab.Screen
                name="Diet"
                component={DietScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Image source={focused ? DietPink : Diet} style={{ width: 20, height: 20 }} />
                    )
                }}
            />
            <Tab.Screen
                name="Input"
                component={InputScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Image source={focused ? InputPink : Output} style={{ width: 20, height: 20 }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
export default TabNavigators;
