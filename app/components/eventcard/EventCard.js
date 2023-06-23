import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Styles';

const EventCard = React.memo(function EventCard({data}) {
    const EventName = data.data.name
    const EventDate = data.data.date
    const EventTimers = data.data.timer.length
    return (
        <View style={Styles.eventCardContainer}>
            <Text style={Styles.name}>
                {EventName}
            </Text>
            <Text style={Styles.date}>
                {EventDate}{'\n'}
            </Text>
            <Text style={Styles.timer}>
                {EventTimers} Timers Scheduled
            </Text>
        </View>
    )
});

export default EventCard;