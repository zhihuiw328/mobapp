import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';


import Layout from '../../components/onboardingPage/layout/Layout';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';
import CreateSafetyCodeStyles from '../../styles/onboarding/CreateSafetyCodeStyles';
import GlobalOnboardingStyles from '../../styles/onboarding/GlobalOnboardingStyles';

const CELL_COUNT = 4;

export default function ConfirmSafetyCode({ navigation }) {
    //stores value typed in verification
    const [code, setCode] = useState('');
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode });


    const renderCell = ({ index, symbol, isFocused }) => {
        return (
            <View
              key={index}
              style={CreateSafetyCodeStyles.cell}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={CreateSafetyCodeStyles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          );
    };

    return (
        <Layout>
            
            <View style={{marginLeft: 20}}>
                <View>
                    <Text style={GlobalOnboardingStyles.stepText}>
                        Step 1 of 5
                    </Text>
                </View>
                {/* Verification Title */}
                <View>
                    <Text style={GlobalOnboardingStyles.titleText}>
                        Confirm Safety Code
                    </Text>
                </View>

                {/* Paragraph Text under title */}
                <View style={{ marginTop: 10, width: '100%' }}>
                    <Text style={GlobalOnboardingStyles.descriptionText}>
                        Your safety code is a 4-digit pin used{'\n'}to verify that you are safe.
                    </Text>
                </View>

            </View>

            {/* Verification boxes made through library: react-native-confirmation-code-field */}
            <View>
                <CodeField
                ref={ref}
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={CreateSafetyCodeStyles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
                />
            </View>

            {/* Buttons */}
            <View style={CreateSafetyCodeStyles.buttonsView}>
                
                <BackButton navigation={navigation} />
                <ContinueButton navigation={navigation} route={"CalendarIntegration"} />
                
            </View>

        </Layout>
    )
}