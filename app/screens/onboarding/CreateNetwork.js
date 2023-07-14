import { View, Text, TouchableOpacity } from 'react-native';


import Layout from '../../components/onboardingPage/layout/Layout';
import ContinueButton from '../../components/onboardingPage/continueButton/ContinueButton';
import BackButton from '../../components/onboardingPage/backButton/BackButton';
import GlobalOnboardingStyles from '../../styles/onboarding/GlobalOnboardingStyles';


export default function CreateNetwork({ navigation }) {


    return (
        <Layout>
        <View style={{ marginLeft:'7%', }}> 
            <View>
                <Text style={GlobalOnboardingStyles.stepText}>
                    Step 4 of 4
                </Text>
            </View>


            {/* Verification Title */}
            <View>
                <Text style={GlobalOnboardingStyles.titleText}>
                    Create Your{'\n'}Safety Network
                </Text>
            </View>

            {/* Paragraph Text under title */}
            <View style={{ marginTop: 25, width: '100%' }}>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    Your Safety Network is a list of close{'\n'}contacts who will be immediately{'\n'}notified if you may be in danger.
                </Text>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate('SelectContact', {network, setNetwork})}}>
                <View style={{
                    width: 300,
                    height: 50,
                    marginTop:25,
                    backgroundColor: '#FFE27D',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: "center",
                    shadowOpacity: 10,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                }}>
                    <Text style={{ color: "#000", fontSize: 24, fontFamily: "Outfit-Regular" }}>Update Safety Network</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 25, width: '100%', marginBottom:20}}>
                <Text style={GlobalOnboardingStyles.descriptionText}>
                    You currently have {'0'} members in your{'\n'}safety network.
                </Text>
            </View>


        
            
        {/* Buttons */}
        <View style={GlobalOnboardingStyles.buttonsView}>
                <BackButton navigation={navigation} />
                <ContinueButton navigation={navigation} route={"Main"}/>
        </View>
        
        </View>
        </Layout>
  )
}