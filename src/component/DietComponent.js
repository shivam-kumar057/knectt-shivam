import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import logo from '../../assets/img/morningdiet.jpg'

const DietComponent = ({ time, calories, diet, quantity }) => {
    return (
        <View style={styles.MorningDietStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, elevation: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#99999' }}>{time}</Text>
                <Text style={{ color: 'pink' }}>{calories}</Text>
            </View>
            <View style={{ height: 250, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '90%', alignItems: 'center', borderRadius: 10, height: 70, elevation: 10 }}>
                    <Image
                        source={logo}
                        style={{ height: 70, width: 90, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                    />
                    <View style={{ left: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#99999' }}>{diet}</Text>
                        <Text style={{ fontSize: 12, color: 'gray', color: '#99999' }}>{quantity}</Text>
                    </View>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '90%', borderRadius: 10, alignItems: 'center', elevation: 10 }}>
                    <Image
                        source={logo}
                        style={{ height: 70, width: 90, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, elevation: 10 }}
                    />
                    <View style={{ left: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#99999' }}>{diet}</Text>
                        <Text style={{ fontSize: 12, color: 'gray', color: '#99999' }}>{quantity}</Text>
                    </View>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '90%', borderRadius: 10, alignItems: 'center', elevation: 10 }}>
                    <Image
                        source={logo}
                        style={{ height: 70, width: 90, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                    />
                    <View style={{ left: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#99999' }}>{diet}</Text>
                        <Text style={{ fontSize: 12, color: 'gray', color: '#99999' }}>{quantity}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MorningDietStyle: {
        // justifyContent: 'space-between',
        // paddingVertical: 10,
        elevation: 10

    }

})
export default DietComponent
