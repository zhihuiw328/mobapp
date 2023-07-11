import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

const BackButton = ({ navigation, route }) => {
    
    const nav = () => {
        
        if (route === 'Verification') {
            // TODO: check if email exist in database


            // TODO: if email exists in databse, send the email to server
            
        }

        navigation.navigate(route);
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