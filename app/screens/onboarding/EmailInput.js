import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import axios from 'axios';
import { saveToken } from '../../utils/Token';

import Layout from '../../components/onboardingPage/layout/Layout';
import EmailInputStyles from '../../styles/onboarding/EmailInputStyles';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';


export default function EmailInput({ navigation }) {
    
    const [email, setEmail] = useState('');

    const handleLogin = async (userEmail) => {
        // console.log(userEmail);
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email: userEmail });
            const {token} = response.data;
            await saveToken("loginToken", token);
            return token;
        } catch (error) {
            console.error('There was an error logging in:', error);
            return null;
        }
    }

    return (
        <Layout>

            {/* Title */}
            
            <Text style={EmailInputStyles.titleText}>Welcome</Text>
        

            {/* Paragraph Text under title */}
            
            <Text style={EmailInputStyles.descptionText}>
                Please enter your email address.
            </Text>
            

            {/* Email */}
            <View style={EmailInputStyles.emailView}>
                <Text 
                style={EmailInputStyles.emailText}>
                    Email
                </Text>
                
                <TextInput 
                    style={EmailInputStyles.textInput}
                    onChangeText={setEmail}
                    value={email}
                    editable={true}
                    autoComplete={'off'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                
            </View>
            

            {/* Continue Button */}
            
            <ContinueButton navigation={navigation} route={'Verification'} callback={async () => await handleLogin(email)}/>
  
        </Layout>
    )
}