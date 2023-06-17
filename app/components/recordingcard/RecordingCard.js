import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

import Styles from './Style';
// import upArrow from '../../../assets/image/upArrow.png';
import downArrow from '../../../assets/image/downArrow.png';


export default function RecordingCard({data}) {
    const EventName = data.data.name;
    const EventDate = data.data.date;
    
    return (
        // <Text> hello </Text>
        <TouchableOpacity style={Styles.cardMinimized} >
            <Text style={Styles.name}>
                {EventName}
            </Text>
            <Text style={Styles.date}>
                {EventDate}
            </Text>

            <View style={Styles.view}>
                <Image source={downArrow} style={Styles.image} />
            </View>
        </TouchableOpacity >
    )
}