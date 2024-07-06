import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import logos from '../../assets/img/BrandLogo.png'
import backarrow from '../../assets/img/back.jpeg'
import smartediet from '../../assets/img/smartediet.jpg'
import chats from '../../assets/img/chat.jpg'
import phone from '../../assets/img/phonebutton.png'


const Header = ({ onPress, chatLogo, logo, backButton, chat, modal }) => {
    return (
        <View style={[styles.container]}>
            <View style={styles.iconStyle}>
                {
                    backButton ?
                        <TouchableWithoutFeedback onPress={onPress}>
                            <Image
                                source={backarrow}
                                style={{ height: 30, width: 30, borderRadius: 25 }}
                            />
                        </TouchableWithoutFeedback> : null
                }

                {
                    chatLogo ?
                        <View style={{ height: 70, width: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                            <Image
                                source={logos}
                                style={{ height: 50, width: 50, borderRadius: 25, right: 10, position: 'absolute' }}
                            />
                        </View> :
                        <View style={{ width: 200, height: 60, justifyContent: 'center', alignItems: 'center', right: 5 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'flex-start', color: 'black' }}>Phone verification</Text>
                        </View>
                }
                {
                    chat ?
                        <View style={{ width: 200, height: 60, justifyContent: 'center', alignItems: 'center', right: 95 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Chat</Text>
                        </View> : null
                }


            </View>
            {
                logo ?
                    <Image
                        source={phone}
                        style={{ height: 30, width: 30, right: 10, backgroundColor: 'white' }}
                    /> : modal ? <Image
                        source={phone}
                        style={{ height: 30, width: 30, right: 10 }}
                    /> : null
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 10,
        //shadowOffset: 0.6,
        shadowColor: "black",
        backgroundColor: 'white',
        paddingHorizontal: 20,
        elevation: 10
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    }
})
export default Header;