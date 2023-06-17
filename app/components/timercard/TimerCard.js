import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'

export default function TimerCard({ time }) {
    return (
        <View style={Styles.timerCardContainer}>
            <Text style={Styles.text}>
                {time}
            </Text>
        </View>
    )
}