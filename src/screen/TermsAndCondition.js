import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, useWindowDimensions } from 'react-native'
import Header from '../component/Header'
import HTML from "react-native-render-html";
import { ProgressLoader } from '../component/ProgressLoader';
const TermsAndCondition = () => {
    const [terms, setTerms] = useState('')
    const [loading, setLoading] = useState(true)
    const { width } = useWindowDimensions();
    const termsAndCondition = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://sushantbhardwaj.com/diet/api/termcondition');
            const json = await response.json();
            const content = json.data[0]
            const source = {
                html: content.content
            };
            setTerms(source)
            setLoading(false)
            console.log("response===", content.content)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        termsAndCondition();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ProgressLoader isVisible={loading} />
            <Header
                chatLogo
            />
            <ScrollView style={{ margin: 10 }}>
                <HTML
                    contentWidth={width}
                    source={terms}
                    customHTMLElementModels={{ color: 'white', backgroundColor: 'red' }}
                />
            </ScrollView>
        </View>
    )
}
// const styles = StyleSheet.create({

// })
export default TermsAndCondition
