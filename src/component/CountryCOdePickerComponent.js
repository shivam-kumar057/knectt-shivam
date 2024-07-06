import React, { useState, useRef } from 'react';
import { View, Text, Alert, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import ButtonComponent from './ButtonComponent';
import { ProgressLoader } from './ProgressLoader';

const CountryCodePickerComponent = ({ onPress, onChangeFormattedText, phoneInput, phoneNumber, loading }) => {
    return (
        <View style={styles.container}>
            {/* <ProgressLoader isVisible={loading} /> */}
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                placeholder={"Mobile number *"}
                defaultCode="IN"
                layout="first"
                withShadow
                autoFocus
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={onChangeFormattedText}
                number={13}

            />
            <ButtonComponent
                text={"Login"}
                onPress={onPress}
                buttonStyle={{
                    backgroundColor: '#F79489',
                    top: 20,
                }}
                textStyle={{
                    color: 'white'
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        borderRadius: 7,
    },
    phoneContainer: {
        backgroundColor: 'white',
        borderRadius: 7,
        alignSelf: 'center',
        width: '95%'
    },
    button: {
        marginTop: 20,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F79489',
        borderRadius: 7
    },
    textInput: {
        paddingVertical: 0,
        backgroundColor: 'white',
        borderRadius: 7,
        color: 'black',

    },
    continueText: {
        color: 'white',
        fontSize: 14
    }
});

export default CountryCodePickerComponent;