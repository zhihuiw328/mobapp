import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import { CodeField, Cursor } from 'react-native-confirmation-code-field';


import Layout from '../../components/onboardingPage/layout/Layout';
import EmailInputStyles from '../../styles/onboarding/EmailInputStyles';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';


export default function EmailInput({ navigation }) {
    
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
                editable={true}
                autoComplete={'off'}
                autoCapitalize={'none'}
                autoCorrect={false}
                />
                
            </View>
            

            {/* Continue Button */}
            
            <ContinueButton navigation={navigation} route={'Verification'} />
  
        </Layout>
    )
}