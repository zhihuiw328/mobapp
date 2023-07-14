import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'


import Layout from '../../components/onboardingPage/layout/Layout';
import SkipButton from '../../components/onboardingPage/skipButton/SkipButton';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';
import EnablePermissionStyles from '../../styles/onboarding/EnablePermissionStyles';
import GlobalOnboardingStyles from '../../styles/onboarding/GlobalOnboardingStyles';

export default function EnablePermission({ navigation }) {


    return (
        <Layout>

            <SkipButton navigation={navigation}/>
        
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <View style={{marginTop:'15%', marginLeft:'7%', }}>
                <View>
                    <Text style={GlobalOnboardingStyles.stepText}>
                        Step 3 of 4
                    </Text>
                </View>


            {/* Verification Title */}
            <View>
                <Text style={GlobalOnboardingStyles.titleText}>
                Enable{'\n'}Permissions
                </Text>
            </View>

            {/* Paragraph Text under title */}
            <View style={{ marginTop: 10, width: '100%' }}>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    In order to keep you safe, Arc needs{'\n'}access to certain features on your{'\n'}phone:
                </Text>
            </View>

            <View style={{ marginTop: 10, width: '100%', marginBottom:20}}>
                <Text style={GlobalOnboardingStyles.subtitleText}>
                    Contacts
                </Text>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    Arc needs your contacts so we can{'\n'}notify your friends, family, and{'\n'}coworkers if an alert is triggered.
                </Text>
            </View>

            <View style={{ marginTop: 5, width: '100%', marginBottom:20}}>
                <Text style={GlobalOnboardingStyles.subtitleText}>
                    Location
                </Text>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    If an alert is triggered, we will let{'\n'}others know your current location so{'\n'}that you can get help right away.
                </Text>
            </View>

            <View style={{ marginTop: 5, width: '100%', marginBottom:20}}>
                <Text style={GlobalOnboardingStyles.subtitleText}>
                    Microphone
                </Text>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    Used to record audio after an alarm is{'\n'}triggered.
                </Text>
            </View>

            <TouchableOpacity >
                <View style={EnablePermissionStyles.enableButton}>
                    <Text style={EnablePermissionStyles.enableText}>
                        Enable Permissions
                    </Text>
                </View>
            </TouchableOpacity>
            
            {/* Buttons */}
            <View style={EnablePermissionStyles.buttonsView}>
                <BackButton navigation={navigation} />
                <ContinueButton navigation={navigation} route={"CreateNetwork"}/>
            </View>
        
            </View>
            </ScrollView>
        </Layout>
  )
}