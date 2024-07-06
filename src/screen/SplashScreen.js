import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from "react-native";
import logo from '../../assets/img/BrandLogo.png'

const SpashScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={logo}
                style={{ height: 200, width: 200 }}
            >
            </ImageBackground>
        </View>
    )
}
export default SpashScreen