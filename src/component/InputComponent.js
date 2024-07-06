import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from '../../assets/img/large_glass.png'
import bottle from '../../assets/img/bottle.png'
import ButtonComponent from './ButtonComponent'
const InputComponent = ({ show, item }) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={{ fontSize: 14, margin: 10, left: 5, color: '#99999' }}>{item.question}</Text>
                {item.id == 1 ?
                    <View>
                        <View style={styles.innerView}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#99999' }}>3.5 litre</Text>
                                <Text style={{ fontSize: 14, color: '#99999' }}>Target 3 litre</Text>
                            </View>
                            <Image
                                source={Icon}
                                style={{ height: 100, width: 70 }}
                            />
                        </View>
                        <Text style={{ color: 'gray', alignSelf: 'center' }}>---------------------------------------------------------------------------------------</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                            <View style={{ height: 50, width: 150, backgroundColor: 'lightgray', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', elevation: 10, opacity: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={Icon}
                                        style={{ height: 30, width: 30 }}
                                    />
                                    <Text style={{ alignSelf: 'center', left: 5, color: '#99999' }}>200 ml</Text>
                                </View>
                                <Image
                                    source={item.plus}
                                    style={{ height: 30, width: 30, top: 3 }}
                                />
                            </View>
                            <View style={{ height: 50, width: 150, backgroundColor: 'lightgray', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={bottle}
                                        style={{ height: 30, width: 30 }}
                                    />
                                    <Text style={{ alignSelf: 'center', left: 5, color: '#99999' }}>500 ml</Text>
                                </View>
                                <Image
                                    source={item.plus}
                                    style={{ height: 30, width: 30, top: 0 }}
                                />
                            </View>
                        </View>
                        <View style={{ height: 10 }} />
                    </View> :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={{ fontSize: 14, color: '#99999' }}>{item.quantity}</Text>

                        {
                            item.id > 4 && item.id < 8 ?
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', right: 20 }}>
                                    <ButtonComponent
                                        buttonStyle={{ width: 100, borderRadius: 20, borderWidth: 1, borderColor: 'lightgray', backgroundColor: 'white' }}
                                        text={item.yes}
                                    />
                                    <ButtonComponent
                                        buttonStyle={{ width: 100, borderRadius: 20, borderWidth: 1, borderColor: 'lightgray', backgroundColor: 'white' }}
                                        text={item.no}
                                    />
                                </View> : null
                        }
                        {
                            item.id == 8 ?
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                    <Text style={{ fontSize: 28 }}>😃</Text>
                                    <Text style={{ fontSize: 28 }}>😔</Text>
                                    <Text style={{ fontSize: 28 }}>😃</Text>
                                    <Text style={{ fontSize: 28 }}>😄</Text>
                                </View> : null
                        }


                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Image
                                source={item.plus}
                                style={{ height: 30, width: 30 }}
                            />
                            <Image
                                source={item.minus}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: "95%",
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 5,
        elevation: 10
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})
export default InputComponent