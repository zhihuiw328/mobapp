import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

const BackButton = ({ navigation }) => {
    
    const nav = () => {
        navigation.goBack();
    };

    
    return (
        <TouchableOpacity onPress={nav}>
            <View style={Styles.buttonView}>
                <Text style={Styles.buttonText}>
                    Back
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default BackButton;