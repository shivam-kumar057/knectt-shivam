import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputComponent from '../component/InputComponent';
import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'
import Header from '../component/Header';

const InputScreen = ({ navigation }) => {
    const List = [
        {
            id: 1,
            question: 'what was your water intake Today',
            quantity: '3.5 litre',
            target: 'Target 3 litre',
            quantityOne: '200 ml',
            quantityTwo: '500 ml',
            plus: plus,
        },
        {
            id: 2,
            question: 'What is your weight Today',
            quantity: '27.5',
            plus: plus,
            minus: minus,
        },
        {
            id: 3,
            question: 'how many Hour did you sleep',
            quantity: '6.h hrs',
            plus: plus,
            minus: minus,
        },
        {
            id: 4,
            question: 'Mensturation Cycle',
            quantity: '15-17',
        },
        {
            id: 5,
            question: 'Did you take Medicines',
            yes: 'yes',
            no: 'no',
        },
        {
            id: 6,
            question: 'Did you Bing',
            yes: 'yes',
            no: 'no',
        },
        {
            id: 7,
            question: 'Did you eat out',
            yes: 'yes',
            no: 'no',
        },
        {
            id: 8,
            question: 'Stress level'
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header
                onPress={() => navigation.pop()}
                chatLogo
                modal
                chat
            />
            <FlatList
                data={List}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <InputComponent
                            item={item}
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
        // padding: 1,
        backgroundColor: 'white'
    }
});

export default InputScreen;