import React, { useState } from "react";
import { Button, Text, SafeAreaView, View, StyleSheet, FlatList, TouchableOpacity, modalPress, Image, ScrollView, Dimensions, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import { ProgressLoader } from "./ProgressLoader";
import HTML from "react-native-render-html";

const ModalTester = ({ isVisible, toggleModal, data, modalPress, planType, loading, planImage, id }) => {
    console.log("loading==", loading)
    const { width } = useWindowDimensions();
    const renderItem = ({ item }) => {
        const source = {
            html: item.feature
        };
        return (
            <View style={{ paddingVertical: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <ProgressLoader isVisible={loading} />
                {/* <Text style={{ fontSize: 14, color: planType == "Slim" ? 'black' : '#999999' }}>{item.id}.</Text> */}
                <View style={{ width: 220 }}>
                    <HTML
                        contentWidth={width}
                        source={source}
                        customHTMLElementModels={{ color: 'white', backgroundColor: 'red' }}
                    />
                </View>

                <Image
                    style={{ height: 40, width: 40 }}
                    source={{
                        uri: item.image
                    }} />
            </View>
        )
    }
    return (
        <Modal
            animationIn="slideInUp"
            isVisible={isVisible}>
            <ProgressLoader isVisible={loading} />
            <View style={{ backgroundColor: id == 1 ? "white" : '#132742', borderRadius: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, height: 40, alignItems: 'center', backgroundColor: id == 1 ? "white" : '#132742', borderTopEndRadius: 20, borderTopLeftRadius: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#F79489' }}>{planType}</Text>
                        <Image
                            style={{ height: 40, width: 40, right: 10, bottom: 5 }}
                            source={{
                                uri: planImage
                            }} />
                    </View>
                    <TouchableOpacity style={{}} onPress={toggleModal}>
                        <Text style={{ fontSize: 25, color: '#F79489' }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.container, { backgroundColor: id == 1 ? 'white' : '#132742' }]}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>
                <View style={{ height: 10 }} />
                <TouchableOpacity onPress={modalPress} style={[styles.dietStyle]}>
                    <Text style={{ color: 'white' }}>Create Diet Profile and Pay</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }} />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        borderRadius: 20,
    },
    dietStyle: {
        minHeight: 40,
        width: "96%",
        backgroundColor: '#F79489',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
})

export default ModalTester;

