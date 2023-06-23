import { View, Text, Image } from 'react-native';
import React from 'react';

import Styles from './Styles';


export default function TimerInput(props) {
    if (props.time == -1) {
        return (
            <View style={Styles.timeContainer}>
                <Image
                    source={require('../../../assets/image/backspace.png')}
                    style={Styles.image} />
            </View>
        )
    } else if (props.time == -2) {
        return (
            <View style={Styles.timeContainerFilled}>
                <View style={Styles.triangle} />
            </View>
        )
    } else {
        return (
            <View style={Styles.timeContainer}>
                <Text style={Styles.text}>
                    {props.time}
                </Text>
            </View>
        )
    }
};