import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Styles from './Styles';

const ContinueButton = ({ navigation, route, callback, data }) => {
    
    const nav = () => {
        
        if (route === "Verification") {
            // TODO: check if email exist in database
            callback().then(loginToken => {
                // TODO: if email exists in databse, send the email to server
                if (loginToken) {
                    navigation.navigate(route);    
                } else {
                    // email not exist, pop email not exist message
                }
            });         
            return;
        }

        if (route === "ConfirmSafetyCode") {
            navigation.navigate(route, {safetyCode: data});
            return;
        }

        navigation.navigate(route);
        if (route === "Main") {
            navigation.dispatch(
                CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Main' },
                ],
                })
            );
        }
    };

    
    return (
        <TouchableOpacity onPress={nav}>
            <View style={Styles.buttonView}>

                <Text style={Styles.buttonText}>Continue</Text>

                <View style={{ marginLeft: 6 }}>
                <Image
                    source={require('../../../../assets/image/blueArrow.png')}
                    style={{
                    width: 20,
                    height: 10,
                    marginRight: 0
                    }}
                />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default ContinueButton;