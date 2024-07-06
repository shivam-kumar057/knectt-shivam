import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'

const CalenderScreen = () => {
    let datesWhitelist = [
        {
            start: moment(),
            end: moment().add(2, 'days')
        }
    ]
    return (
        <View style={{ height: 10, width: '100%' }}>
            <CalendarStrip
                datesWhitelist={datesWhitelist}
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{
                    type: 'border',
                    duration: 200,
                    borderWidth: 1,
                    borderHighlightColor: 'white',
                    color: 'black'

                }}
                style={{ height: 100 }}
                calenderHeaderStyle={{ color: 'pink' }}
                calendarColor={{ color: 'pink' }}
                dateNumberStyle={{ color: 'pink' }}
                dateNameStyle={{ color: 'pink' }}
                iconContainer={{ flex: 0.1 }}
                highlightDateNumberStyle={{ color: 'pink' }}
                highlightDateNameStyle={{ color: 'pink' }}
                disabledDateNumberStyle={'pink'}
                dateContainerStyle={{ color: 'pink' }}
            />
        </View>
    )
}
const style = StyleSheet.create({

})
export default CalenderScreen;