import React, { useState, useEffect, useRef, useCallback } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TextInput, ToastAndroid } from 'react-native'
import ButtonComponent from '../component/ButtonComponent'
import Header from '../component/Header'

const OtpScreen = ({ route, navigation }) => {
    let textInput = useRef(null)
    const lengthInput = 6
    const [internalVal, setInternalVal] = useState("")
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(45)
    const otpValidation = route.params.otp
    const [timer, setTimer] = useState(10);
    const [timerCount, setTimerCount] = useState(false)
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
    useEffect(() => {
        textInput.focus()
        timer > 0 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback])
    const resetTimer = function () {
        ToastAndroid.show('otp send successfully', ToastAndroid.SHORT);
        setTimerCount(true)
        if (!timer) {
            setTimer(10);
        }
    };
    const OtpValidation = (otpNumber) => {
        if (otpValidation == otpNumber) {
            navigation.navigate('TabNavigators', {
                screen: "Home",
                params: {
                    loading: loading
                }
            })
        } else if (otpValidation != otpNumber) {
            ToastAndroid.show('Please enter valid otp', ToastAndroid.SHORT);
        } else {
            console.log("error")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header
            />
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <View style={{ width: '100%', height: '25%', justifyContent: 'space-evenly', margin: 15 }}>
                        <Text style={{ fontSize: 25, color: '#999999' }}>Enter OTP</Text>
                        <Text style={{ fontSize: 15, top: 5, color: '#999999' }}>We have sent 6 digit verification at</Text>
                        <Text style={{ fontSize: 15, top: 10, color: '#999999' }}>{route.params.otp}</Text>
                        <Text style={{ fontSize: 15, top: 10, color: '#999999' }}>{route.params.phone}</Text>
                        <Text style={{ fontSize: 15, top: 10, color: '#999999' }}>Please check your message box</Text>
                    </View>
                    <View style={{ height: 100, justifyContent: 'flex-end', elevation: 10, margin: 10 }}>
                        <TextInput
                            ref={(input) => textInput = input}
                            style={{ height: 0, width: 0 }}
                            value={internalVal}
                            onChangeText={(text) => setInternalVal(text)}
                            maxLength={lengthInput}
                            keyboardType='numeric'
                            returnKeyType="done"
                        />
                        <View style={styles.inputContainer}>
                            {
                                Array(lengthInput).fill().map((element, index) => (
                                    <View key={index} style={styles.cellView}>
                                        <Text onPress={() => textInput.focus()} style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>{internalVal && internalVal.length > 0 ? internalVal[index] : ""}</Text>
                                    </View>
                                ))
                            }


                        </View>
                    </View>
                    <View>
                        {/* <Text onPress={() => resetTimer()} style={{ fontSize: 14, color: '#f79489', alignSelf: 'flex-end', right: 10 }}>Resend OTP</Text> */}
                        <ButtonComponent
                            text={"Submit"}
                            buttonStyle={{
                                backgroundColor: '#F79489',
                            }}
                            textStyle={{
                                color: 'white'
                            }}
                            onPress={() => OtpValidation(internalVal)}
                        />
                        {
                            (timerCount && timer != 0) ? <Text style={{ fontSize: 14, color: '#f79489', alignSelf: 'center', right: 10 }}> Resend OTP in <Text style={{ color: 'black' }}>0:{timer}</Text></Text> : <Text onPress={() => resetTimer()} style={{ fontSize: 14, color: '#f79489', alignSelf: 'center', right: 10 }}>Resend OTP</Text>
                        }

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cellView: {
        paddingVertical: 11,
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: 1,
        elevation: 4
    }

})
export default OtpScreen