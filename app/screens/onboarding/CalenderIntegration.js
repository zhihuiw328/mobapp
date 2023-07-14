import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


import Layout from '../../components/onboardingPage/layout/Layout';
import SkipButton from '../../components/onboardingPage/skipButton/SkipButton';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';
import CalendarIntegrationStyles from '../../styles/onboarding/CalendarIntegrationStyles';
import GlobalOnboardingStyles from '../../styles/onboarding/GlobalOnboardingStyles';

export default function CalendarIntegration({ navigation }) {
    //stores value typed in verification
    const [value, setValue] = useState('');

    return (

        <Layout>
        
            <SkipButton navigation={navigation} />


            <View>
                <Text style={GlobalOnboardingStyles.stepText}>Step 3 of 5</Text>
            </View>


            {/* Verification Title */}
            <View>
                <Text style={GlobalOnboardingStyles.titleText}>Calendar{'\n'}Integration</Text>
            </View>

            {/* Paragraph Text under title */}
            <View style={{ marginTop: 40, width: '100%' }}>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    Arc will automatically sync with your{'\n'}calendar to display upcoming{'\n'}showings and automatically create{'\n'}timers.
                </Text>
            </View>

            <View style={{ marginTop: 35, width: '100%', marginBottom:20}}>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    Please enter your calendar email to{'\n'}enable.
                </Text>
            </View>

            {/* text input  */}
            <View style={{ marginTop: '7%', alignItems:'center', justifyContent: 'center', height:40, width:350, borderBottomColor: 'white', borderBottomWidth: 2, }}>
                <TextInput 
                style={CalendarIntegrationStyles.textInput}
                editable={true}
                autoComplete={'off'}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder="Enter your email"
                placeholderTextColor={'#d1d1d1'}
                />
            </View>
                
            {/* Buttons */}
            <View style={CalendarIntegrationStyles.buttonsView}>
                <BackButton navigation={navigation}/>
                <ContinueButton navigation={navigation} route={"EnablePermission"}/>
            </View>
        </Layout>
    )
}