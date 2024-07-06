import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text, SafeAreaView, FlatList, Image } from 'react-native';
import DietComponent from '../component/DietComponent';
import Header from '../component/Header';
import CalenderScreen from './CalenderScreen';

const List = [
    {
        id: 1,
        image1: '../../assets/img/morningdiet.jpg',
        image2: '../../assets/img/morningdiet.jpg',
        image3: '../../assets/img/morningdiet.jpg',
        time: 'Early Morning',
        calories: '500 kcal',
        diet: '1 Glass jeera Water',
        quantity: '200ml',
    },
    {
        id: 2,
        image1: '../../assets/img/morningdiet.jpg',
        image2: '../../assets/img/morningdiet.jpg',
        image3: '../../assets/img/morningdiet.jpg',
        time: 'Breakfast',
        calories: '500 kcal',
        diet: 'Egg with omelette',
        quantity: '200ml',
    },
    {
        id: 3,
        image1: '../../assets/img/morningdiet.jpg',
        image2: '../../assets/img/morningdiet.jpg',
        image3: '../../assets/img/morningdiet.jpg',
        time: 'Lunch',
        calories: '500 kcal',
        diet: '1 Glass jeera Water',
        quantity: '200ml',
    },
    {
        id: 4,
        image1: '../../assets/img/morningdiet.jpg',
        image2: '../../assets/img/morningdiet.jpg',
        image3: '../../assets/img/morningdiet.jpg',
        time: 'Dinner',
        calories: '500 kcal',
        diet: '1 Glass jeera Water',
        quantity: '200ml',
    },
]
const DietScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <Header
                onPress={() => navigation.pop()}
                chatLogo
                modal
                chat
            />
            <View style={styles.calenderStyle}>
                <CalenderScreen />
            </View>
            <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', height: 40, elevation: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                <Text style={{ fontSize: 14, color: '#99999' }}>5 days left</Text>
            </View>
            <FlatList
                data={List}
                style={{ paddingVertical: 10 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <DietComponent
                            time={item.time}
                            calories={item.calories}
                            diet={item.diet}
                            quantity={item.quantity}
                        />
                    )
                }}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 10
    },
    calenderStyle: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        top: 10
        // backgroundColor: 'white'

    },
    flatlistStyle: {
        backgroundColor: 'red'
    }
});

export default DietScreen;