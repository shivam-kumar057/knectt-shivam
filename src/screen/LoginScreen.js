import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, SafeAreaView, Text, ToastAndroid, StatusBar } from 'react-native'
import Images from '../component/Images'
import loginLogo from '../../assets/img/BrandLogo.png'
import Inputtext from '../component/InputText'
import ButtonComponent from '../component/ButtonComponent'
import CountryCodePickerComponent from '../component/CountryCOdePickerComponent'
import { ProgressLoader } from '../component/ProgressLoader'
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    const [loading, setLoading] = useState(true)

    const onLoginButton = () => {
        if (phoneNumber >= 10) {
            navigation.navigate('otp', { phone: phoneNumber, otp: 123456 })
        } else {
            console.log("error")
        }
    }
    let option = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobile: phoneNumber })
    }
    const sum = () => {
        var i = 0;
        var sum = 0;
        while (i < 100) {
            sum = sum + i;
            sum = i + sum;
            i++;
        }
        console.log("sum===", sum)
    }
    useEffect(() => {
        sum();
    }, [])
    const mobileOtpValidation = async (phoneNumber) => {
        navigation.navigate('otp', { phone: phoneNumber, otp: 123456 })
        try {
            // setLoading(true)
            const response = await fetch('http://sushantbhardwaj.com/diet/api/mobile/mobilenumber');
            // setLoading(false)
            const json = await response.json();
            if (response.status !== 200 && phoneNumber.length == 13) {

            } else if (phoneNumber.length < 13) {
                ToastAndroid.show('Please enter valid phone number', ToastAndroid.SHORT);
            }
        } catch {
            console.log('error data')
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f79489" />
            <Images
                source={loginLogo}
                imageStyle={{
                    height: 200,
                    width: 200
                }}
            />
            <View style={{ justifyContent: 'center', }}>
                <View style={{}}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', bottom: 10, marginLeft: 14 }}>Login <Text style={{ fontWeight: '600', fontSize: 14 }}> or  </Text>Signup</Text>

                    <CountryCodePickerComponent
                        phoneInput={phoneInput}
                        phoneNumber={phoneNumber}
                        onPress={() => mobileOtpValidation(phoneNumber)}
                        onChangeFormattedText={text => {
                            setphoneNumber(text);
                        }}
                    // loading={loading}
                    />
                </View>
                <View style={styles.tccontainer}>
                    <Text style={styles.privacy}>By continuing, I agree to the <Text onPress={() => navigation.navigate('termsAndCondition')} style={{ color: '#F79489' }}>Terms & Conditions</Text> & <Text style={{ color: '#F79489' }}>Privacy Policy</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    },
    imageContainer: {
        height: 100, width: 100
    },
    privacy: {
        fontSize: 14,
        marginHorizontal: 10,
        color: '#999999',
        left: 8
    },
    tccontainer: {
        width: 320,
        top: 10
    }
})
export default LoginScreen;