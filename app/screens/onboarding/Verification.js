import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import { getToken, saveToken } from '../../utils/Token';
import axios from 'axios';

import Layout from '../../components/onboardingPage/layout/Layout';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import VerificationStyles from '../../styles/onboarding/VerificationStyles';

const CELL_COUNT = 6;

export default function Verification({ navigation }) {
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

    const checkCode = async () => {
        if (code.length === CELL_COUNT){
            
            try {
                const loginToken = await getToken("loginToken");

                // if decode == code, get access token and store to local for the authProvider
                const response = await axios.post('http://localhost:3000/api/login/confirm', { token: loginToken, code: code });
                const {authToken} = response.data;
                await saveToken("userToken", authToken);
                // get safety code, if it is not null nav to MainScreen
                const config = {
                    headers: {
                        "Authorization": "Bearer " + authToken
                    }
                };
                const safetyCodeResponse = await axios.get('http://localhost:3000/api/SafetyCode', config);
                const {safetyCode} = safetyCodeResponse.data;
                console.log(safetyCode);
                if (safetyCode) {
                    navigation.navigate("Main");
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: "Main" },
                            ],
                        })
                    );     
                } else {
                    // otherwise, nav to VerifiedScreen 
                    navigation.navigate("VerifiedScreen");
                }
                
            } catch(e) {
                // TODO: else. clean the code and re-enter code, pop a wrong message
                console.log("invalid code!", e);

            }
                   
        }
    };

    useEffect(() => {
        checkCode();
    }, [code]);


    return (
        <Layout>
            
            <View >
                {/* Verification Title */}
                <View>
                <Text style={VerificationStyles.title}>
                    Verification
                </Text>
                </View>

                {/* Paragraph Text under title */}
                <View>
                <Text style={VerificationStyles.text}>
                    We’ve sent you a confirmation code{'\n'}to confirm your identity, please enter{'\n'}it to continue.
                </Text>
                </View>
            </View>
            {/* Verification boxes made through library: react-native-confirmation-code-field */}
            <View>
                <CodeField
                ref={ref}
                // {...props}
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