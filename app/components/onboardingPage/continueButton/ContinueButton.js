import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

const ContinueButton = ({ navigation, route, email }) => {
    
    const nav = () => {
        
        if (route === 'Verification') {
            // TODO: check if email exist in database


            // TODO: if email exists in databse, send the email to server
            
            navigation.navigate(route, {serverCode: '123456'});
            return;
        }

        navigation.navigate(route);
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