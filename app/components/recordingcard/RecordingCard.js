import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import Slider from '@react-native-community/slider';

import Styles from './Style';
// import upArrow from '../../../assets/image/upArrow.png';
import downArrow from '../../../assets/image/downArrow.png';


export default function RecordingCard({data, selectRecordingId, setSelectRecordingId}) {
    
    const [sliderValue, setSliderValue] = useState(null);
    
    const EventName = data.data.name;
    const EventDate = data.data.date;
    const isExpanded = selectRecordingId === data.id;
    
    
    if (isExpanded) {
        return (

            <TouchableOpacity style={Styles.expandContainer} onPress={() => setSelectRecordingId(data.id)}>
            <Text style={Styles.name}>
                {EventName}
            </Text>
            <Text style={Styles.date}>
                {EventDate}
            </Text>
            

            <View style={Styles.sliderContainer}>
                <Slider
                    value={0.2}
                    // onValueChange={value => this.setState(value)}
                    thumbTintColor={'#3684C9'}
                />
            </View>

            <View style={Styles.rowContainer}>
                    <View style={Styles.toLeft}>
                        <Image 
                            source={require('../../../assets/image/rewind.png')}
                            style={Styles.icon}
                        />

                        <Image 
                            source={require('../../../assets/image/play.png')}
                            style={Styles.icon}
                        />

                        <Image 
                            source={require('../../../assets/image/forward.png')}
                            style={Styles.icon}
                        />

                    </View>

                    <View style={Styles.toRight}>
                        <Image 
                            source={require('../../../assets/image/download.png')}
                            style={Styles.icon}
                        />

                        <Image 
                            source={require('../../../assets/image/share.png')}
                            style={Styles.icon}
                        />
                    </View>
                </View>
            


            </TouchableOpacity >
        )
    } else{
        return (
            <TouchableOpacity style={Styles.cardMinimized} onPress={() => setSelectRecordingId(data.id)}>
                <Text style={Styles.name}>
                    {EventName}
                </Text>
                <Text style={Styles.date}>
                    {EventDate}
                </Text>
    
            </TouchableOpacity >
        )
    }
}