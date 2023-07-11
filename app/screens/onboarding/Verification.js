import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';

import Layout from '../../components/onboardingPage/layout/Layout';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import VerificationStyles from '../../styles/onboarding/VerificationStyles';


const CELL_COUNT = 6;

export default function Verification({ navigation, serverCode}) {
    const [code, setCode] = useState('');
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode });
    

    const renderCell = ({ index, symbol, isFocused }) => {
        return (
            <View
              key={index}
              style={VerificationStyles.cell}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={VerificationStyles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          );
    };

    useEffect(() => {
        if (code.length == CELL_COUNT){
            // TODO: check code === serverCode, remove Auth page in stack
            
            navigation.navigate('VerifiedScreen');
            // navigation.dispatch(
            //     CommonActions.reset({
            //       index: 0,
            //       routes: [
            //         { name: 'Main' },
            //       ],
            //     })
            // );            
        }
    }, [code]);


    return (
        <Layout>

            {/* Verification Title */}
            
            <Text style={VerificationStyles.title}>Verification</Text>
            

            {/* Paragraph Text under title */}
            
            <Text style={VerificationStyles.text}>
                We’ve sent you a confirmation code{'\n'}to confirm your identity, please enter{'\n'}it to continue.
            </Text>
            

            {/* Verification boxes made through library: react-native-confirmation-code-field */}
            <View>
                <CodeField
                ref={ref}
                {...props}
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={VerificationStyles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
                />
            </View>

            {/* Resend Code Button */}
            <TouchableOpacity>
            <View style={VerificationStyles.resendView}>
                <Text style={VerificationStyles.resendText}>
                    RESEND CODE
                </Text>
            </View>
            </TouchableOpacity>

            {/* Buttons */}
            <View style={{ marginTop: 30, flexDirection: "row" }}>

                {/* Back Button */}
                <BackButton navigation={navigation} route={'EmailInput'} />
                
                
            </View>
        </Layout>
    )
}